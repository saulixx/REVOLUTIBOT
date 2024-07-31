import { AdminLog as TAdminLog } from "../api/adminLog/AdminLog";

export const ADMINLOG_TITLE_FIELD = "action";

export const AdminLogTitle = (record: TAdminLog): string => {
  return record.action?.toString() || String(record.id);
};
