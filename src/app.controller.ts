import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@ApiTags('authentication')
@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req): Promise<{ access_token: string }> {
    const { firebase_id } = req.body;

    return await this.authService.generateJWT(firebase_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('jwt/check')
  public jwtCheck() {}
}
