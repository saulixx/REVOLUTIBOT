import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserReferralService } from "./userReferral.service";
import { UserReferralControllerBase } from "./base/userReferral.controller.base";

@swagger.ApiTags("userReferrals")
@common.Controller("userReferrals")
export class UserReferralController extends UserReferralControllerBase {
  constructor(protected readonly service: UserReferralService) {
    super(service);
  }
}
