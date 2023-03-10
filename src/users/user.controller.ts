import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateUserRequestDto,
  UpdateUserRequestDto,
} from './dtos/user.request.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('User')
export class UserController {
  logger: Logger;
  constructor(private readonly userService: UserService) {
    this.logger = new Logger();
  }

  @Post()
  async create(@Body() user: CreateUserRequestDto): Promise<User> {
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
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  // Find account by Firebase ID
  @Get('findByFirebaseID/:firebase_id')
  async findOne(@Param('firebase_id') firebase_id: string) {
    const result = await this.userService.findOne({ firebase_id: firebase_id });
    return result;
  }

  @Get('findUsersByQuery/:query') //???
  async findOneByQuery(@Param('query') query: string) {
    const searchByName = await this.userService.find({
      name: { $regex: query },
    });
    const searchByEmail = await this.userService.find({
      email: { $regex: query },
    });

    searchByEmail.forEach((user) => {
      const found = searchByName.some(
        (element) => element.firebase_id === user.firebase_id,
      );
      if (!found) {
        searchByName.push(user);
      }
    });

    return searchByName;
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
