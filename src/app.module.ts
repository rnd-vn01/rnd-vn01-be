import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AcupointModule } from './accupuncture-points/acupoint.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeridianModule } from './meridians/meridian.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGO_DB,
      // 'mongodb+srv://rnd-cycle13-vn01:OHgzUYdcgK4WVORu@cluster0.bqu0t0p.mongodb.net/rnd-cycle13-vn01?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
    AcupointModule,
    MeridianModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
