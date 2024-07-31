import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReferralLinkWhereInput = {
  id?: StringFilter;
  link?: StringNullableFilter;
  referralLink?: StringNullableFilter;
  referrerId?: IntNullableFilter;
  userId?: IntNullableFilter;
};
