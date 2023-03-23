import { Model } from 'mongoose';
import { BaseService } from 'src/shared/services/base.service';
import { AcupointsEntity_en } from '../entities/acupoint-en.entity';
export declare class AcupointService_en extends BaseService<AcupointsEntity_en> {
    private readonly acupointModel;
    constructor(acupointModel: Model<AcupointsEntity_en>);
}
