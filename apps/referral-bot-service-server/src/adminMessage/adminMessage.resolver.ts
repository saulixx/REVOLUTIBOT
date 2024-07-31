import * as graphql from "@nestjs/graphql";
import { AdminMessageResolverBase } from "./base/adminMessage.resolver.base";
import { AdminMessage } from "./base/AdminMessage";
import { AdminMessageService } from "./adminMessage.service";

@graphql.Resolver(() => AdminMessage)
export class AdminMessageResolver extends AdminMessageResolverBase {
  constructor(protected readonly service: AdminMessageService) {
    super(service);
  }
}
