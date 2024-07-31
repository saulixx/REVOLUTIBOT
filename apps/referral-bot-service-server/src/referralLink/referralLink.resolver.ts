import * as graphql from "@nestjs/graphql";
import { ReferralLinkResolverBase } from "./base/referralLink.resolver.base";
import { ReferralLink } from "./base/ReferralLink";
import { ReferralLinkService } from "./referralLink.service";

@graphql.Resolver(() => ReferralLink)
export class ReferralLinkResolver extends ReferralLinkResolverBase {
  constructor(protected readonly service: ReferralLinkService) {
    super(service);
  }
}
