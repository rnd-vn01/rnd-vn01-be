import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Schema({ collection: 'quizzes', timestamps: true })
export class QuizzesEntity extends BaseEntity {
  @Prop()
  userFirebaseId: string;

  @Prop()
  numberOfQuestions: number;

  @Prop()
  correctAnswers: number;

  @Prop()
  quizOption: number;

  @Prop()
  details: IQuestionDetail[];
}

export interface IQuestionDetail {
  question: string;
  answer: number;
  correctAnswer: number;
  time: number;
  isCorrect: boolean;
  options: IQuestionDetailOption[];
}

export interface IQuestionDetailOption {
  id: number;
  answer: string;
}

export const QuizzesSchema = SchemaFactory.createForClass(QuizzesEntity);
