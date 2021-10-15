import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric } from 'class-validator';

export class LoginUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  username: string;

  @ApiProperty()
  @IsAlphanumeric()
  password: string;
}
