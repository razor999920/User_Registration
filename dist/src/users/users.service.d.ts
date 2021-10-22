import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersResporitory;
    private users;
    constructor(usersResporitory: Repository<User>);
    findUsers(): Promise<User[]>;
    findById(id: number): Promise<User>;
    findByUsername(username: string): Promise<any>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(body: User): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
