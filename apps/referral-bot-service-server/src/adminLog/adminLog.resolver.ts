import * as graphql from "@nestjs/graphql";
import { AdminLogResolverBase } from "./base/adminLog.resolver.base";
import { AdminLog } from "./base/AdminLog";
import { AdminLogService } from "./adminLog.service";

@graphql.Resolver(() => AdminLog)
export class AdminLogResolver extends AdminLogResolverBase {
  constructor(protected readonly service: AdminLogService) {
    super(service);
  }
}
