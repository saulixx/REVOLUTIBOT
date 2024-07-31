import { Module } from "@nestjs/common";
import { CardRequestModuleBase } from "./base/cardRequest.module.base";
import { CardRequestService } from "./cardRequest.service";
import { CardRequestController } from "./cardRequest.controller";
import { CardRequestResolver } from "./cardRequest.resolver";

@Module({
  imports: [CardRequestModuleBase],
  controllers: [CardRequestController],
  providers: [CardRequestService, CardRequestResolver],
  exports: [CardRequestService],
})
export class CardRequestModule {}
