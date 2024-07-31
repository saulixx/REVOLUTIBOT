import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CardRequestService } from "./cardRequest.service";
import { CardRequestControllerBase } from "./base/cardRequest.controller.base";

@swagger.ApiTags("cardRequests")
@common.Controller("cardRequests")
export class CardRequestController extends CardRequestControllerBase {
  constructor(protected readonly service: CardRequestService) {
    super(service);
  }
}
