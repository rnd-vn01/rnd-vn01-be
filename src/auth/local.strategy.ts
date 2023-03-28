import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtPayload, Payload } from './auth.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  public async validate(username: string, password: string): Promise<Payload> {
    const user = await this.authService.validateUser(username, password);
    console.log(user);

    if (!user) {
      throw new UnauthorizedException('NotFoundUser');
    }
    const payload: Payload = {
      firebase_id: user.firebase_id,
      name: user.name,
      role: user.role,
      image: user.image,
    };
    return payload;
  }

  // async validate(firebase_id: string): Promise<Payload> {
  //   const user = await this.authService.validateUser(firebase_id);
  //   console.log(user);

  //   if (!user) {
  //     throw new UnauthorizedException('NotFoundUser');
  //   }
  //   const payload: Payload = {
  //     firebase_id: user.firebase_id,
  //     name: user.name,
  //     role: user.role,
  //     image: user.image,
  //   };
  //   return payload;
  // }
}
