import { Document } from 'mongoose';
export declare class BaseEntity extends Document {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
