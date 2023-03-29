import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class GetUserRequestDto { }

export class CreateUserRequestDto {
  @ApiProperty()
  @IsString()
  firebase_id: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  image: string;

  @ApiProperty()
  @IsString()
  name: string;
}

export class UpdateUserRequestDto extends PartialType(CreateUserRequestDto) { }
