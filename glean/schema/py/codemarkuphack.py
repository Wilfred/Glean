# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Optional, Tuple, Union, List, Dict, TypeVar
from thrift.py3 import Struct
from enum import Enum
import ast
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate, angle_for, R, Just, InnerGleanSchemaPredicate
from glean.schema.py.codehack import *
from glean.schema.py.codemarkuptypes import *
from glean.schema.py.src import *


from glean.schema.codemarkup_hack.types import (
    HackContainsParentEntity,
    HackEntityInfo,
    HackEntityLocation,
    HackVisibility,
    HackAnnotation,
    HackResolveLocation,
    HackContainsChildEntity,
    HackFileEntityXRefLocations,
    HackEntityUses,
    HackEntityKind,
    HackFileEntityXRefSpans,
)


class CodemarkupHackHackContainsParentEntity(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], child: ast.Expr, parent: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackContainsParentEntity.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, child, 'child'), angle_for(__env, parent, 'parent')])) or '_' } }}", HackContainsParentEntity

  @staticmethod
  def angle_query(*, child: Optional["CodeHackEntity"] = None, parent: Optional["CodeHackEntity"] = None) -> "CodemarkupHackHackContainsParentEntity":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackEntityInfo(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, info: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackEntityInfo.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, info, 'info')])) or '_' } }}", HackEntityInfo

  @staticmethod
  def angle_query(*, entity: Optional["CodeHackEntity"] = None, info: Optional["CodemarkupTypesSymbolInfo"] = None) -> "CodemarkupHackHackEntityInfo":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackEntityLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, location: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackEntityLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, location, 'location')])) or '_' } }}", HackEntityLocation

  @staticmethod
  def angle_query(*, entity: Optional["CodeHackEntity"] = None, location: Optional["CodemarkupTypesLocation"] = None) -> "CodemarkupHackHackEntityLocation":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackVisibility(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, visibility: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackVisibility.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, visibility, 'visibility')])) or '_' } }}", HackVisibility

  @staticmethod
  def angle_query(*, entity: Optional["CodeHackEntity"] = None, visibility: Optional["CodemarkupTypesVisibility"] = None) -> "CodemarkupHackHackVisibility":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackAnnotation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, anns: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackAnnotation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, anns, 'anns')])) or '_' } }}", HackAnnotation

  @staticmethod
  def angle_query(*, entity: Optional["CodeHackEntity"] = None, anns: Optional["CodeHackAnnotations"] = None) -> "CodemarkupHackHackAnnotation":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackResolveLocation(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], location: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackResolveLocation.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, location, 'location'), angle_for(__env, entity, 'entity')])) or '_' } }}", HackResolveLocation

  @staticmethod
  def angle_query(*, location: Optional["CodemarkupTypesLocation"] = None, entity: Optional["CodeHackEntity"] = None) -> "CodemarkupHackHackResolveLocation":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackContainsChildEntity(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], parent: ast.Expr, child: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackContainsChildEntity.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, parent, 'parent'), angle_for(__env, child, 'child')])) or '_' } }}", HackContainsChildEntity

  @staticmethod
  def angle_query(*, parent: Optional["CodeHackEntity"] = None, child: Optional["CodeHackEntity"] = None) -> "CodemarkupHackHackContainsChildEntity":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackFileEntityXRefLocations(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, xref: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackFileEntityXRefLocations.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, xref, 'xref'), angle_for(__env, entity, 'entity')])) or '_' } }}", HackFileEntityXRefLocations

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, xref: Optional["CodemarkupTypesXRefLocation"] = None, entity: Optional["CodeHackEntity"] = None) -> "CodemarkupHackHackFileEntityXRefLocations":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackEntityUses(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], target: ast.Expr, file: ast.Expr, span: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackEntityUses.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, target, 'target'), angle_for(__env, file, 'file'), angle_for(__env, span, 'span')])) or '_' } }}", HackEntityUses

  @staticmethod
  def angle_query(*, target: Optional["CodeHackEntity"] = None, file: Optional["SrcFile"] = None, span: Optional["SrcByteSpan"] = None) -> "CodemarkupHackHackEntityUses":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackEntityKind(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], entity: ast.Expr, kind: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackEntityKind.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, entity, 'entity'), angle_for(__env, kind, 'kind')])) or '_' } }}", HackEntityKind

  @staticmethod
  def angle_query(*, entity: Optional["CodeHackEntity"] = None, kind: Optional["CodemarkupTypesSymbolKind"] = None) -> "CodemarkupHackHackEntityKind":
    raise Exception("this function can only be called from @angle_query")



class CodemarkupHackHackFileEntityXRefSpans(GleanSchemaPredicate):
  @staticmethod
  def build_angle(__env: Dict[str, R], file: ast.Expr, span: ast.Expr, entity: ast.Expr) -> Tuple[str, Struct]:
    return f"codemarkup.hack.HackFileEntityXRefSpans.2 {{ { ', '.join(filter(lambda x: x != '', [angle_for(__env, file, 'file'), angle_for(__env, span, 'span'), angle_for(__env, entity, 'entity')])) or '_' } }}", HackFileEntityXRefSpans

  @staticmethod
  def angle_query(*, file: Optional["SrcFile"] = None, span: Optional["SrcByteSpan"] = None, entity: Optional["CodeHackEntity"] = None) -> "CodemarkupHackHackFileEntityXRefSpans":
    raise Exception("this function can only be called from @angle_query")






