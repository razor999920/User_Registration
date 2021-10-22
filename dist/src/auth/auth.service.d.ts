import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateuser(username: string, password: string): Promise<LoginUserDto>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
