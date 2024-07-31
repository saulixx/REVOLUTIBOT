import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReferralLinkService } from "./referralLink.service";
import { ReferralLinkControllerBase } from "./base/referralLink.controller.base";

@swagger.ApiTags("referralLinks")
@common.Controller("referralLinks")
export class ReferralLinkController extends ReferralLinkControllerBase {
  constructor(protected readonly service: ReferralLinkService) {
    super(service);
  }
}
