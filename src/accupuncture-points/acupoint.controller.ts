import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LanguageEnum } from '../shared/enums/language.enum';
import {
  GetAcupointRequestDto,
  LanguageRequestDto,
} from './dtos/get-point.request.dto';
import { AcupointsEntity_en } from './entities/acupoint-en.entity';
import { AcupointsEntity_vi } from './entities/acupoint-vi.entity';
import { AcupointService_en } from './services/acupoint-en.service';
import { AcupointService_vi } from './services/acupoint-vi.service';

@ApiTags('Acupoints')
@Controller('acupoint')
export class AcupointController {
  constructor(
    private readonly acupointService_en: AcupointService_en,
    private readonly acupointService_vi: AcupointService_vi,
  ) {}

  @Get()
  async getAll(
    @Query() req: LanguageRequestDto,
  ): Promise<AcupointsEntity_en[] | AcupointsEntity_vi[]> {
    switch (req.language) {
      case LanguageEnum.VI:
        return await this.acupointService_vi.getAll();

      case LanguageEnum.EN:
        return await this.acupointService_en.getAll();
    }
  }

  @Get('filter')
  async getOneByFilter(@Query() filter: GetAcupointRequestDto) {
    switch (filter.language) {
      case LanguageEnum.VI:
        return await this.acupointService_vi.get({ code: filter.code });

      default:
        return await this.acupointService_en.get({ code: filter.code });
    }
  }
}
