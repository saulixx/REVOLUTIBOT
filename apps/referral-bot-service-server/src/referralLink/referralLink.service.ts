import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReferralLinkServiceBase } from "./base/referralLink.service.base";

@Injectable()
export class ReferralLinkService extends ReferralLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
