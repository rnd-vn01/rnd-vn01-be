import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LanguageRequestDto } from 'src/shared/dtos/language.dto';
import { LanguageEnum } from '../shared/enums/language.enum';
import {
  GetAcupointRequestDto,
  UpdateAcupointRequestDto,
} from './dtos/acupoint.request.dto';
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
        return await this.acupointService_vi.findAll();

      case LanguageEnum.EN:
        return await this.acupointService_en.findAll();
    }
  }

  @Get('filter')
  async getOneByFilter(@Query() filter: GetAcupointRequestDto) {
    const { language, code } = filter;
    switch (language) {
      case LanguageEnum.VI:
        const vi = await this.acupointService_vi.find({
          code: { $regex: code.toUpperCase() },
        });
        return vi;

      case LanguageEnum.EN:
        const en = await this.acupointService_en.find({
          code: { $regex: code.toUpperCase() },
        });
        return en;
    }
  }

  @Put()
  async updateAcupoint(
    @Query() query: LanguageRequestDto,
    @Body() acupointDto: UpdateAcupointRequestDto,
  ): Promise<boolean> {
    const { language } = query;
    switch (language) {
      case LanguageEnum.VI:
        const isUpdated_vi = await this.acupointService_vi.updateByCode(
          acupointDto.code,
          acupointDto,
        );
        return isUpdated_vi;

      case LanguageEnum.EN:
        const isUpdated_en = await this.acupointService_en.updateByCode(
          acupointDto.code,
          acupointDto,
        );
        return isUpdated_en;
    }
  }
}
