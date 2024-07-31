import { ReferralUse as TReferralUse } from "../api/referralUse/ReferralUse";

export const REFERRALUSE_TITLE_FIELD = "id";

export const ReferralUseTitle = (record: TReferralUse): string => {
  return record.id?.toString() || String(record.id);
};
