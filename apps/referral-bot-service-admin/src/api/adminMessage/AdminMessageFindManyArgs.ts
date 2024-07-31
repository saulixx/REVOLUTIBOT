import { AdminMessageWhereInput } from "./AdminMessageWhereInput";
import { AdminMessageOrderByInput } from "./AdminMessageOrderByInput";

export type AdminMessageFindManyArgs = {
  where?: AdminMessageWhereInput;
  orderBy?: Array<AdminMessageOrderByInput>;
  skip?: number;
  take?: number;
};
