import * as graphql from "@nestjs/graphql";
import { UserReferralResolverBase } from "./base/userReferral.resolver.base";
import { UserReferral } from "./base/UserReferral";
import { UserReferralService } from "./userReferral.service";

@graphql.Resolver(() => UserReferral)
export class UserReferralResolver extends UserReferralResolverBase {
  constructor(protected readonly service: UserReferralService) {
    super(service);
  }
}
