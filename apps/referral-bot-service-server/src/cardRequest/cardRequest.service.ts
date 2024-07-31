import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CardRequestServiceBase } from "./base/cardRequest.service.base";

@Injectable()
export class CardRequestService extends CardRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
