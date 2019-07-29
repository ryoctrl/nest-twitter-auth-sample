import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TwitterStrategy } from './twitter.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [UsersModule, PassportModule.register({ session: true })],
    providers: [AuthService, TwitterStrategy],
    controllers: [AuthController]
})
export class AuthModule {}
