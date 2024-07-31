import { MessageTemplate as TMessageTemplate } from "../api/messageTemplate/MessageTemplate";

export const MESSAGETEMPLATE_TITLE_FIELD = "id";

export const MessageTemplateTitle = (record: TMessageTemplate): string => {
  return record.id?.toString() || String(record.id);
};
