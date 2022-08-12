# @generated
# To regenerate this file run fbcode//glean/schema/gen/sync
from typing import Union
import json
from glean.schema.py.glean_schema_predicate import GleanSchemaPredicate


class GSSearchHsSearchByName(GleanSchemaPredicate):
  @staticmethod
  def build_angle(key: Union[str, int]) -> str:
    return f"search.hs.SearchByName.9 { json.dumps(key) }"

  @staticmethod
  def angle_query(*, name: str) -> "GSSearchHsSearchByName":
    raise Exception("this function can only be called from @angle_query")


