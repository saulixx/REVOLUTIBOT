import * as graphql from "@nestjs/graphql";
import { ReferralUseResolverBase } from "./base/referralUse.resolver.base";
import { ReferralUse } from "./base/ReferralUse";
import { ReferralUseService } from "./referralUse.service";

@graphql.Resolver(() => ReferralUse)
export class ReferralUseResolver extends ReferralUseResolverBase {
  constructor(protected readonly service: ReferralUseService) {
    super(service);
  }
}
