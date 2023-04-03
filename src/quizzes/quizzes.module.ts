import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';

const providers = [QuizzesService];

@Module({
  controllers: [QuizzesController],
  providers: providers,
  exports: providers,
})
export class QuizzesModule {}
