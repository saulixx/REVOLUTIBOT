import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SessionWhereInput = {
  expiration?: DateTimeNullableFilter;
  id?: StringFilter;
  token?: StringNullableFilter;
};
