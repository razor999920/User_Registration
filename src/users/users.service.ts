import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Raza', username: 'razor', password: 'test123' },
    { id: 1, name: 'Indeep', username: 'razor', password: 'test123' },
    { id: 2, name: 'Marc', username: 'razor', password: 'test123' },
  ];

  constructor(
    @InjectRepository(User) private usersResporitory: Repository<User>,
  ) {}

  findUsers(): Promise<User[]> {
    return this.usersResporitory.find(); // Select * From user
  }

  async findById(id: number): Promise<User> {
    try {
      const user = this.usersResporitory.findOneOrFail(id); // Select * From user Where user.id == id;
      return user;
    } catch (err) {
      throw err;
    }
  }

  async findByUsername(username: string): Promise<User> {
    try {
      // const user = this.usersResporitory.findOneOrFail(username);
      const user = this.users.find((user) => username === user.username);
      return user;
    } catch (err) {
      throw err;
    }
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersResporitory.create({
      ...createUserDto,
    }); // const newUser = new User(); newUser.name = name;
    return this.usersResporitory.save(newUser); // Insert
  }

  async updateUser(body: User): Promise<User> {
    const user = await this.findById(body.id);
    user.name = body.name;
    user.username = body.username;
    user.password = body.password;
    return this.usersResporitory.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.findById(id);

    return this.usersResporitory.remove(user);
  }
}
