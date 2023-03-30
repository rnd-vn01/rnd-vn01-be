import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Delete, UseGuards } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../common/decorators';
import {
  CreateUserRequestDto,
  UpdateUserRequestDto,
} from './dtos/user.request.dto';
import { UserEntity } from './entities/user.entity';
import { UserRoleEnum } from './enums/user-role.enum';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('User')
@UseGuards(AuthGuard, RolesGuard)
@Roles(UserRoleEnum.ADMIN)
export class UserController {
  logger: Logger;
  constructor(private readonly userService: UserService) {
    this.logger = new Logger();
  }

  @Post()
  async create(@Body() user: CreateUserRequestDto): Promise<UserEntity> {
    const isDuplicate = await this.userService.findOne({
      firebase_id: user.firebase_id,
    });

    //This to solve the case of provider login => cannot identify newly created account or old
    if (isDuplicate) {
      throw new Error('user_existed');
    }
    return await this.userService.create(user);
  }

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  // Find account by Firebase ID
  @Get('findByFirebaseID/:firebase_id')
  async findOne(@Param('firebase_id') firebase_id: string) {
    const result = await this.userService.findOne({ firebase_id: firebase_id });
    return result;
  }

  @Get('findUsersByQuery/:email') //???
  @IsEmail()
  async findOneByEmail(@Param('email') email: string): Promise<UserEntity> {
    const user = await this.userService.findOne({
      email: { $regex: email },
    });

    return user;
  }

  @Put('updateProfile')
  async update(@Body() updateUserDto: UpdateUserRequestDto) {
    const result = await this.userService.findOneAndUpdate(
      { firebase_id: updateUserDto.firebase_id },
      updateUserDto,
    );

    return result;
  }

  @Delete('/:firebase_id')
  async deleteUser(@Param('firebase_id') firebase_id: string) {
    const result = await this.userService.removeByConditions({
      firebase_id: firebase_id,
    });
    return result;
  }
}
