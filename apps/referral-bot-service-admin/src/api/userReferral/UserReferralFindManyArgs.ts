import { UserReferralWhereInput } from "./UserReferralWhereInput";
import { UserReferralOrderByInput } from "./UserReferralOrderByInput";

export type UserReferralFindManyArgs = {
  where?: UserReferralWhereInput;
  orderBy?: Array<UserReferralOrderByInput>;
  skip?: number;
  take?: number;
};
