import { CardRequest as TCardRequest } from "../api/cardRequest/CardRequest";

export const CARDREQUEST_TITLE_FIELD = "id";

export const CardRequestTitle = (record: TCardRequest): string => {
  return record.id?.toString() || String(record.id);
};
