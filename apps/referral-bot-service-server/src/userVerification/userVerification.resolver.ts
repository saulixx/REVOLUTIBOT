import * as graphql from "@nestjs/graphql";
import { UserVerificationResolverBase } from "./base/userVerification.resolver.base";
import { UserVerification } from "./base/UserVerification";
import { UserVerificationService } from "./userVerification.service";

@graphql.Resolver(() => UserVerification)
export class UserVerificationResolver extends UserVerificationResolverBase {
  constructor(protected readonly service: UserVerificationService) {
    super(service);
  }
}
