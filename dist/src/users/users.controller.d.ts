import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
    updateUser(body: User): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
