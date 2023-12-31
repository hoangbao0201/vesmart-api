import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { JwrStratega } from "./stratega";


@Module({
    imports: [
        JwtModule.register({})
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        JwrStratega
    ]
})
export class AuthModule {}