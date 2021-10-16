import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { validate } from 'class-validator';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET', // Protect in env,
    });
  }

  async validate(payload: any) {
    // const user = await this.usersService.findByUsername(payload.username);
    return {
      id: payload.sub,
      username: payload.username,
    };
  }
}
