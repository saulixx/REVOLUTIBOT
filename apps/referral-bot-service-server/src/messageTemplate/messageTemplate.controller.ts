import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MessageTemplateService } from "./messageTemplate.service";
import { MessageTemplateControllerBase } from "./base/messageTemplate.controller.base";

@swagger.ApiTags("messageTemplates")
@common.Controller("messageTemplates")
export class MessageTemplateController extends MessageTemplateControllerBase {
  constructor(protected readonly service: MessageTemplateService) {
    super(service);
  }
}
