import { Module } from "@nestjs/common";
import { ReferralLinkModuleBase } from "./base/referralLink.module.base";
import { ReferralLinkService } from "./referralLink.service";
import { ReferralLinkController } from "./referralLink.controller";
import { ReferralLinkResolver } from "./referralLink.resolver";

@Module({
  imports: [ReferralLinkModuleBase],
  controllers: [ReferralLinkController],
  providers: [ReferralLinkService, ReferralLinkResolver],
  exports: [ReferralLinkService],
})
export class ReferralLinkModule {}
