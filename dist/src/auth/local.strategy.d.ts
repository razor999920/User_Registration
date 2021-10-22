import { Strategy } from 'passport-local';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { AuthService } from './auth.service';
declare const LocalStratgy_base: new (...args: any[]) => Strategy;
export declare class LocalStratgy extends LocalStratgy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<LoginUserDto>;
}
export {};
