import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(firebase_id: string, password: string): Promise<UserEntity> {
    const user = await this.authService.validateUser(firebase_id, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
