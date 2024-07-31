import { SortOrder } from "../../util/SortOrder";

export type AdminLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
