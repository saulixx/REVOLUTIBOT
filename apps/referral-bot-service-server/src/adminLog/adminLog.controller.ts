import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdminLogService } from "./adminLog.service";
import { AdminLogControllerBase } from "./base/adminLog.controller.base";

@swagger.ApiTags("adminLogs")
@common.Controller("adminLogs")
export class AdminLogController extends AdminLogControllerBase {
  constructor(protected readonly service: AdminLogService) {
    super(service);
  }
}
