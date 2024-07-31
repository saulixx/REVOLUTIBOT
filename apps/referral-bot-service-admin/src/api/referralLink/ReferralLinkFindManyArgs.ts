import { ReferralLinkWhereInput } from "./ReferralLinkWhereInput";
import { ReferralLinkOrderByInput } from "./ReferralLinkOrderByInput";

export type ReferralLinkFindManyArgs = {
  where?: ReferralLinkWhereInput;
  orderBy?: Array<ReferralLinkOrderByInput>;
  skip?: number;
  take?: number;
};
