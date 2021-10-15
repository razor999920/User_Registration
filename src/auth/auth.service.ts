import { Injectable } from '@nestjs/common';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateuser(
    username: string,
    password: string,
  ): Promise<LoginUserDto> {
    console.log(username, password);
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === password) {
      const { id, name, ...rest } = user;
      return rest;
    }

    return null;
  }
}
