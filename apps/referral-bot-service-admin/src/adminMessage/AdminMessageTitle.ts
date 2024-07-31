import { AdminMessage as TAdminMessage } from "../api/adminMessage/AdminMessage";

export const ADMINMESSAGE_TITLE_FIELD = "title";

export const AdminMessageTitle = (record: TAdminMessage): string => {
  return record.title?.toString() || String(record.id);
};
