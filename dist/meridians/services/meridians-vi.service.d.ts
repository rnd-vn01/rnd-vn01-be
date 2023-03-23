import { Model } from 'mongoose';
import { BaseService } from 'src/shared/services/base.service';
import { MeridiansEntity_vi } from '../entities/meridians-vi.entity';
export declare class MeridianService_vi extends BaseService<MeridiansEntity_vi> {
    private readonly meridianModel;
    constructor(meridianModel: Model<MeridiansEntity_vi>);
}
