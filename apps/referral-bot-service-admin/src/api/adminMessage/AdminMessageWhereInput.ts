import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdminMessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
