import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dtos/user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(firebase_id: string, pass: string): Promise<UserEntity> {
    const user = await this.usersService.findOne({ firebase_id: firebase_id });
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: UserDto) {
    const payload = { name: user.name, sub: user.firebase_id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
