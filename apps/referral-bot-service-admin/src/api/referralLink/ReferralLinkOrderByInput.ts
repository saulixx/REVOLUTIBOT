import { SortOrder } from "../../util/SortOrder";

export type ReferralLinkOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  referralLink?: SortOrder;
  referrerId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
