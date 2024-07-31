import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  expiration?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
