import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  referralLink?: StringNullableFilter;
  shared?: IntNullableFilter;
  step?: IntNullableFilter;
  username?: StringFilter;
  verifications?: IntNullableFilter;
};
