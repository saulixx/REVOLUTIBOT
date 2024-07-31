import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminLogServiceBase } from "./base/adminLog.service.base";

@Injectable()
export class AdminLogService extends AdminLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
