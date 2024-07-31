import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  referralLink?: SortOrder;
  roles?: SortOrder;
  shared?: SortOrder;
  step?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  verifications?: SortOrder;
};
