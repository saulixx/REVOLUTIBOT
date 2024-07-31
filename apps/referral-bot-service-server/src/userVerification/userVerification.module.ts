import { Module } from "@nestjs/common";
import { UserVerificationModuleBase } from "./base/userVerification.module.base";
import { UserVerificationService } from "./userVerification.service";
import { UserVerificationController } from "./userVerification.controller";
import { UserVerificationResolver } from "./userVerification.resolver";

@Module({
  imports: [UserVerificationModuleBase],
  controllers: [UserVerificationController],
  providers: [UserVerificationService, UserVerificationResolver],
  exports: [UserVerificationService],
})
export class UserVerificationModule {}
