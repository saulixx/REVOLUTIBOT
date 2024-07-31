import { ReferralLink as TReferralLink } from "../api/referralLink/ReferralLink";

export const REFERRALLINK_TITLE_FIELD = "link";

export const ReferralLinkTitle = (record: TReferralLink): string => {
  return record.link?.toString() || String(record.id);
};
