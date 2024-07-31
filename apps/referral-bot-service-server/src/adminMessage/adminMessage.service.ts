import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminMessageServiceBase } from "./base/adminMessage.service.base";

@Injectable()
export class AdminMessageService extends AdminMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
