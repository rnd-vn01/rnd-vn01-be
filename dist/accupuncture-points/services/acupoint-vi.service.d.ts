import { Model } from 'mongoose';
import { BaseService } from 'src/shared/services/base.service';
import { AcupointsEntity_vi } from '../entities/acupoint-vi.entity';
export declare class AcupointService_vi extends BaseService<AcupointsEntity_vi> {
    private readonly acupointModel;
    constructor(acupointModel: Model<AcupointsEntity_vi>);
}
