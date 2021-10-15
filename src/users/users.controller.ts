import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiNotFoundResponse()
  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findUsers();
  }

  @ApiOkResponse({ type: User })
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = this.usersService.findById(id);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  // @ApiOkResponse({ type: User })
  // @Get('FindByUsername')
  // getUserByUsername(@Query() query): Promise<User> {
  //   const user = this.usersService.findByUsername(query);

  //   if (!user) {
  //     throw new NotFoundException();
  //   }

  //   return user;
  // }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Put('update')
  updateUser(@Body() body: User): Promise<User> {
    console.log(body);
    return this.usersService.updateUser(body);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.deleteUser(id);
  }
}
