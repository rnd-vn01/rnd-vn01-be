import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizzesEntity } from './entities/quizzes.entity';
import { QuizzesService } from './quizzes.service';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  async create(@Body() createQuizDto: CreateQuizDto): Promise<QuizzesEntity> {
    return await this.quizzesService.create(createQuizDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<QuizzesEntity> {
    return await this.quizzesService.findOne({ _id: id });
  }

  @Get('users/:firebaseId')
  async findAllByUserFirebaseId(
    @Param() firebaseId: string,
  ): Promise<QuizzesEntity[]> {
    return await this.quizzesService.find({ userFirebaseId: firebaseId });
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
  //   return this.quizzesService.update(id, updateQuizDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizzesService.remove(id);
  }
}
