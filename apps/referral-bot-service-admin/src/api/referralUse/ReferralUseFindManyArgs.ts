import { ReferralUseWhereInput } from "./ReferralUseWhereInput";
import { ReferralUseOrderByInput } from "./ReferralUseOrderByInput";

export type ReferralUseFindManyArgs = {
  where?: ReferralUseWhereInput;
  orderBy?: Array<ReferralUseOrderByInput>;
  skip?: number;
  take?: number;
};
