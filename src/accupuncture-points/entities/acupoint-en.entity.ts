import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Schema({ collection: 'acupoints_en', timestamps: true })
export class AcupointsEntity_en extends BaseEntity {
  @Prop()
  code: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  anatomy: string;
  @Prop()
  technique: string;
  @Prop()
  functionalities: string[];
}

export const AcupointsSchema_en =
  SchemaFactory.createForClass(AcupointsEntity_en);
