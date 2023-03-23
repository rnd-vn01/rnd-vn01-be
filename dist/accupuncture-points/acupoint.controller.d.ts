import { LanguageRequestDto } from 'src/shared/dtos/language.dto';
import { GetAcupointRequestDto, UpdateAcupointRequestDto } from './dtos/acupoint.request.dto';
import { AcupointsEntity_en } from './entities/acupoint-en.entity';
import { AcupointsEntity_vi } from './entities/acupoint-vi.entity';
import { AcupointService_en } from './services/acupoint-en.service';
import { AcupointService_vi } from './services/acupoint-vi.service';
export declare class AcupointController {
    private readonly acupointService_en;
    private readonly acupointService_vi;
    constructor(acupointService_en: AcupointService_en, acupointService_vi: AcupointService_vi);
    getAll(req: LanguageRequestDto): Promise<AcupointsEntity_en[] | AcupointsEntity_vi[]>;
    getOneByFilter(filter: GetAcupointRequestDto): Promise<AcupointsEntity_en | AcupointsEntity_vi>;
    updateAcupoint(query: LanguageRequestDto, acupointDto: UpdateAcupointRequestDto): Promise<boolean>;
}
