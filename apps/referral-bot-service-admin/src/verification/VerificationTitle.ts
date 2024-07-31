import { Verification as TVerification } from "../api/verification/Verification";

export const VERIFICATION_TITLE_FIELD = "filePath";

export const VerificationTitle = (record: TVerification): string => {
  return record.filePath?.toString() || String(record.id);
};
