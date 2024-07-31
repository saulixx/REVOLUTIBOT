import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserReferralServiceBase } from "./base/userReferral.service.base";

@Injectable()
export class UserReferralService extends UserReferralServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
