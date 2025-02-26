{-
  Copyright (c) Meta Platforms, Inc. and affiliates.
  All rights reserved.

  This source code is licensed under the BSD-style license found in the
  LICENSE file in the root directory of this source tree.
-}

module Glean.Regression.Indexer
  ( withTestBackend
  , withTestDatabase
  ) where

import Control.Exception
import qualified Data.IntMap as IntMap
import System.Exit
import System.FilePath

import Glean
import Glean.Database.Config
import Glean.Database.Schema.ComputeIds
import Glean.Database.Types
import Glean.LocalOrRemote
import Glean.Database.Test
import Glean.Indexer
import Glean.Regression.Config
import Glean.Util.Observed as Observed
import Glean.Util.Some

-- | Set up a Backend for test runs
withTestBackend
  :: TestConfig
  -> (Some LocalOrRemote -> IO a)
  -> IO a
withTestBackend test action =
  withTestEnv settings (\env -> setSchema env >>= action . Some)
  where
  settings = [ setRoot $ testOutput test </> "db" ]
  setSchema env = case testSchemaVersion test of
    Nothing -> return env
    Just ver -> do
      index <- Observed.get (envSchemaSource env)
      let proc = procSchemaHashed (schemaIndexCurrent index)
      case IntMap.lookup ver (hashedSchemaAllVersions proc) of
        Nothing -> throwIO $ ErrorCall $ "unknown schema version: " <> show ver
        Just id -> return env { envSchemaId = Just id }

-- | Run the supplied Indexer to populate a temporary DB
withTestDatabase
  :: Some LocalOrRemote
  -> RunIndexer
  -> TestConfig
  -> (Repo -> IO a)
  -> IO a
withTestDatabase backend indexer test action = do
  let
    repo = testRepo test
    params = IndexerParams {
      indexerRoot = testRoot test,
      indexerProjectRoot = testProjectRoot test,
      indexerOutput = testOutput test,
      indexerGroup = testGroup test
    }
  fillDatabase backend repo "" (die "repo already exists") $
    indexer backend repo params
  action repo
