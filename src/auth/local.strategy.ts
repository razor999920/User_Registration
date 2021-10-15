import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStratgy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(); //config
  }

  async validate(username: string, password: string): Promise<LoginUserDto> {
    const user = await this.authService.validateuser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
