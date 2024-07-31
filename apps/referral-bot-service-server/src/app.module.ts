import { Module } from "@nestjs/common";
import { AdminMessageModule } from "./adminMessage/adminMessage.module";
import { VerificationModule } from "./verification/verification.module";
import { ReferralLinkModule } from "./referralLink/referralLink.module";
import { UserModule } from "./user/user.module";
import { SessionModule } from "./session/session.module";
import { GroupModule } from "./group/group.module";
import { ReferralUseModule } from "./referralUse/referralUse.module";
import { MessageTemplateModule } from "./messageTemplate/messageTemplate.module";
import { PaymentModule } from "./payment/payment.module";
import { NotificationModule } from "./notification/notification.module";
import { UserVerificationModule } from "./userVerification/userVerification.module";
import { AdminLogModule } from "./adminLog/adminLog.module";
import { UserReferralModule } from "./userReferral/userReferral.module";
import { CardRequestModule } from "./cardRequest/cardRequest.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AdminMessageModule,
    VerificationModule,
    ReferralLinkModule,
    UserModule,
    SessionModule,
    GroupModule,
    ReferralUseModule,
    MessageTemplateModule,
    PaymentModule,
    NotificationModule,
    UserVerificationModule,
    AdminLogModule,
    UserReferralModule,
    CardRequestModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
