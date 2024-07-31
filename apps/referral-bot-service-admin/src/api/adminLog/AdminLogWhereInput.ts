import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminLogWhereInput = {
  action?: StringNullableFilter;
  details?: StringNullableFilter;
  id?: StringFilter;
};
