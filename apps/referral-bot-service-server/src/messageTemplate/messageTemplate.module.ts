import { Module } from "@nestjs/common";
import { MessageTemplateModuleBase } from "./base/messageTemplate.module.base";
import { MessageTemplateService } from "./messageTemplate.service";
import { MessageTemplateController } from "./messageTemplate.controller";
import { MessageTemplateResolver } from "./messageTemplate.resolver";

@Module({
  imports: [MessageTemplateModuleBase],
  controllers: [MessageTemplateController],
  providers: [MessageTemplateService, MessageTemplateResolver],
  exports: [MessageTemplateService],
})
export class MessageTemplateModule {}
