import * as graphql from "@nestjs/graphql";
import { MessageTemplateResolverBase } from "./base/messageTemplate.resolver.base";
import { MessageTemplate } from "./base/MessageTemplate";
import { MessageTemplateService } from "./messageTemplate.service";

@graphql.Resolver(() => MessageTemplate)
export class MessageTemplateResolver extends MessageTemplateResolverBase {
  constructor(protected readonly service: MessageTemplateService) {
    super(service);
  }
}
