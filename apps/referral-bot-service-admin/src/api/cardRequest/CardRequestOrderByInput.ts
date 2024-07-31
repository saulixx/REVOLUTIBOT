import { SortOrder } from "../../util/SortOrder";

export type CardRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
