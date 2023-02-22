import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class BaseEntity extends Document {
  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}
