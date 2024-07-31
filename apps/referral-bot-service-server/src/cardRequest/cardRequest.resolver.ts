import * as graphql from "@nestjs/graphql";
import { CardRequestResolverBase } from "./base/cardRequest.resolver.base";
import { CardRequest } from "./base/CardRequest";
import { CardRequestService } from "./cardRequest.service";

@graphql.Resolver(() => CardRequest)
export class CardRequestResolver extends CardRequestResolverBase {
  constructor(protected readonly service: CardRequestService) {
    super(service);
  }
}
