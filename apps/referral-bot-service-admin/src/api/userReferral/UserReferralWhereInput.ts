import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserReferralWhereInput = {
  id?: StringFilter;
  referralUser?: StringNullableFilter;
  referredUser?: StringNullableFilter;
};
