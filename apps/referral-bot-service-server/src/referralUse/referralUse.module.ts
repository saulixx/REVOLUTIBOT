import { Module } from "@nestjs/common";
import { ReferralUseModuleBase } from "./base/referralUse.module.base";
import { ReferralUseService } from "./referralUse.service";
import { ReferralUseController } from "./referralUse.controller";
import { ReferralUseResolver } from "./referralUse.resolver";

@Module({
  imports: [ReferralUseModuleBase],
  controllers: [ReferralUseController],
  providers: [ReferralUseService, ReferralUseResolver],
  exports: [ReferralUseService],
})
export class ReferralUseModule {}
