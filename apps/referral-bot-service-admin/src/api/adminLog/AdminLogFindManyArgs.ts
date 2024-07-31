import { AdminLogWhereInput } from "./AdminLogWhereInput";
import { AdminLogOrderByInput } from "./AdminLogOrderByInput";

export type AdminLogFindManyArgs = {
  where?: AdminLogWhereInput;
  orderBy?: Array<AdminLogOrderByInput>;
  skip?: number;
  take?: number;
};
