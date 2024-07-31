import { SortOrder } from "../../util/SortOrder";

export type UserReferralOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  referralUser?: SortOrder;
  referredUser?: SortOrder;
  updatedAt?: SortOrder;
};
