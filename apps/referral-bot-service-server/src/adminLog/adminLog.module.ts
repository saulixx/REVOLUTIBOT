import { Module } from "@nestjs/common";
import { AdminLogModuleBase } from "./base/adminLog.module.base";
import { AdminLogService } from "./adminLog.service";
import { AdminLogController } from "./adminLog.controller";
import { AdminLogResolver } from "./adminLog.resolver";

@Module({
  imports: [AdminLogModuleBase],
  controllers: [AdminLogController],
  providers: [AdminLogService, AdminLogResolver],
  exports: [AdminLogService],
})
export class AdminLogModule {}
