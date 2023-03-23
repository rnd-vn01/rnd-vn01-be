import { LanguageRequestDto } from 'src/shared/dtos/language.dto';
import { GetMeridianRequestDto, UpdateMeridianRequestDto } from './dtos/meridian.request.dto';
import { MeridiansEntity_en } from './entities/meridians-en.entity';
import { MeridiansEntity_vi } from './entities/meridians-vi.entity';
import { MeridianService_en } from './services/meridians-en.service';
import { MeridianService_vi } from './services/meridians-vi.service';
export declare class MeridianController {
    private readonly meridianService_en;
    private readonly meridianService_vi;
    constructor(meridianService_en: MeridianService_en, meridianService_vi: MeridianService_vi);
    getAll(req: LanguageRequestDto): Promise<MeridiansEntity_en[] | MeridiansEntity_vi[]>;
    getOneByFilter(filter: GetMeridianRequestDto): Promise<MeridiansEntity_en | MeridiansEntity_vi>;
    updateMeridian(query: LanguageRequestDto, updateMeridianReqDto: UpdateMeridianRequestDto): Promise<boolean>;
}
