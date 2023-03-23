import { Document, Model } from 'mongoose';
import { IBaseService } from '../interfaces/base.interface';
export declare abstract class BaseService<T extends Document> implements IBaseService<T> {
    private readonly model;
    private readonly modelName;
    constructor(model: Model<T>);
    create(dto: Partial<Record<keyof T, unknown>>): Promise<T | null>;
    update(id: string, updateDto: Partial<Record<keyof T, unknown>>): Promise<boolean>;
    findAll(): Promise<T[] | null>;
    find(conditions: Partial<Record<keyof T, unknown>>): Promise<T[]>;
    findOne(conditions: Partial<Record<keyof T, unknown>>): Promise<T | null>;
    getById(id: string): Promise<T | null>;
    getByIds(ids: string[]): Promise<T[] | null>;
    updateByCode(code: string, updateDto: Partial<Record<keyof T, unknown>>): Promise<boolean>;
    remove(id: string): Promise<boolean>;
}
