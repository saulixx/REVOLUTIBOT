import { Module } from "@nestjs/common";
import { AdminMessageModuleBase } from "./base/adminMessage.module.base";
import { AdminMessageService } from "./adminMessage.service";
import { AdminMessageController } from "./adminMessage.controller";
import { AdminMessageResolver } from "./adminMessage.resolver";

@Module({
  imports: [AdminMessageModuleBase],
  controllers: [AdminMessageController],
  providers: [AdminMessageService, AdminMessageResolver],
  exports: [AdminMessageService],
})
export class AdminMessageModule {}
