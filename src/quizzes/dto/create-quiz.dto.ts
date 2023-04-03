import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {
  @ApiProperty()
  userFirebaseId: string;

  @ApiProperty()
  numberOfQuestions: number;

  @ApiProperty()
  correctAnswers: number;

  @ApiProperty()
  quizOption: number;

  @ApiProperty()
  details: QuestionDetailDto[];
}

class QuestionDetailDto {
  @ApiProperty()
  question: string;

  @ApiProperty()
  answer: number;

  @ApiProperty()
  correctAnswer: number;

  @ApiProperty()
  time: number;

  @ApiProperty()
  isCorrect: boolean;

  @ApiProperty()
  options: QuestionDetailOptionDto[];
}

class QuestionDetailOptionDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  answer: string;
}
