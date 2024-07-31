import { UserReferral as TUserReferral } from "../api/userReferral/UserReferral";

export const USERREFERRAL_TITLE_FIELD = "referralUser";

export const UserReferralTitle = (record: TUserReferral): string => {
  return record.referralUser?.toString() || String(record.id);
};
