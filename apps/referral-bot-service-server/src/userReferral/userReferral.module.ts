import { Module } from "@nestjs/common";
import { UserReferralModuleBase } from "./base/userReferral.module.base";
import { UserReferralService } from "./userReferral.service";
import { UserReferralController } from "./userReferral.controller";
import { UserReferralResolver } from "./userReferral.resolver";

@Module({
  imports: [UserReferralModuleBase],
  controllers: [UserReferralController],
  providers: [UserReferralService, UserReferralResolver],
  exports: [UserReferralService],
})
export class UserReferralModule {}
