import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminMessageService } from "./adminMessage.service";
import { AdminMessageControllerBase } from "./base/adminMessage.controller.base";

@swagger.ApiTags("adminMessages")
@common.Controller("adminMessages")
export class AdminMessageController extends AdminMessageControllerBase {
  constructor(protected readonly service: AdminMessageService) {
    super(service);
  }
}
