import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AcupointModule } from './accupuncture-points/acupoint.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeridianModule } from './meridians/meridian.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://rnd-cycle13-vn01:OHgzUYdcgK4WVORu@cluster0.bqu0t0p.mongodb.net/rnd-cycle13-vn01?retryWrites=true&w=majority',
      // `mongodb+srv://${process.env.MONGO_DATABASE_USER}
      // :${process.env.MONGO_DATABASE_PASSWORD}
      // @${process.env.MONGO_DATABASE_CLUSTER}
      // /${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`,
    ),
    AcupointModule,
    MeridianModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
