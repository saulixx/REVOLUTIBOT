import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReferralUseServiceBase } from "./base/referralUse.service.base";

@Injectable()
export class ReferralUseService extends ReferralUseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
