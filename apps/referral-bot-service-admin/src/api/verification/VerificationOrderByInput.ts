import { SortOrder } from "../../util/SortOrder";

export type VerificationOrderByInput = {
  approved?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
