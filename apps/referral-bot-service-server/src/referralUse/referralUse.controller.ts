import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReferralUseService } from "./referralUse.service";
import { ReferralUseControllerBase } from "./base/referralUse.controller.base";

@swagger.ApiTags("referralUses")
@common.Controller("referralUses")
export class ReferralUseController extends ReferralUseControllerBase {
  constructor(protected readonly service: ReferralUseService) {
    super(service);
  }
}
