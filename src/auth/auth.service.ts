import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateuser(
    username: string,
    password: string,
  ): Promise<LoginUserDto> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === password) {
      const { id, name, ...rest } = user;
      return rest;
    }

    return null;
  }

  async login(user: any) {
    console.log("Auth Service")
    console.log(user.username)
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
