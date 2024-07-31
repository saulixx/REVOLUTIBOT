import { UserVerification as TUserVerification } from "../api/userVerification/UserVerification";

export const USERVERIFICATION_TITLE_FIELD = "id";

export const UserVerificationTitle = (record: TUserVerification): string => {
  return record.id?.toString() || String(record.id);
};
