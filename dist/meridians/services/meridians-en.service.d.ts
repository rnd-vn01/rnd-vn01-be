import { Model } from 'mongoose';
import { BaseService } from 'src/shared/services/base.service';
import { MeridiansEntity_en } from '../entities/meridians-en.entity';
export declare class MeridianService_en extends BaseService<MeridiansEntity_en> {
    private readonly meridianModel;
    constructor(meridianModel: Model<MeridiansEntity_en>);
}
