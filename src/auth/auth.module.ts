import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStratgy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET', //put env variables
    signOptions: { expiresIn: '60s'}
  })],
  providers: [AuthService, LocalStratgy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
