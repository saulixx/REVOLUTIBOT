import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MessageTemplateServiceBase } from "./base/messageTemplate.service.base";

@Injectable()
export class MessageTemplateService extends MessageTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
