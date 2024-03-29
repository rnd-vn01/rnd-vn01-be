import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LanguageRequestDto } from 'src/shared/dtos/language.dto';
import { LanguageEnum } from '../shared/enums/language.enum';
import {
  GetMeridianRequestDto,
  UpdateMeridianRequestDto,
} from './dtos/meridian.request.dto';
import { MeridiansEntity_en } from './entities/meridians-en.entity';
import { MeridiansEntity_vi } from './entities/meridians-vi.entity';
import { MeridianService_en } from './services/meridians-en.service';
import { MeridianService_vi } from './services/meridians-vi.service';

@ApiTags('Meridian')
@Controller('meridian')
export class MeridianController {
  constructor(
    private readonly meridianService_en: MeridianService_en,
    private readonly meridianService_vi: MeridianService_vi,
  ) {}

  @Get()
  async getAll(
    @Query() req: LanguageRequestDto,
  ): Promise<MeridiansEntity_en[] | MeridiansEntity_vi[]> {
    const { language } = req;
    switch (language) {
      case LanguageEnum.VI:
        return await this.meridianService_vi.findAll();

      case LanguageEnum.EN:
        return await this.meridianService_en.findAll();
    }
  }

  @Get('filter')
  async getOneByFilter(@Query() filter: GetMeridianRequestDto) {
    const { language, code } = filter;
    switch (language) {
      case LanguageEnum.VI:
        const vi = await this.meridianService_vi.find({
          code: { $regex: code.toUpperCase() },
        });
        return vi;

      case LanguageEnum.EN:
        const en = await this.meridianService_en.find({
          code: { $regex: code.toUpperCase() },
        });
        return en;
    }
  }

  @Put()
  async updateMeridian(
    @Query() query: LanguageRequestDto,
    @Body() updateMeridianReqDto: UpdateMeridianRequestDto,
  ): Promise<boolean> {
    const { language } = query;
    switch (language) {
      case LanguageEnum.VI:
        const isUpdated_vi = await this.meridianService_vi.updateByCode(
          updateMeridianReqDto.code,
          updateMeridianReqDto,
        );
        return isUpdated_vi;

      case LanguageEnum.EN:
        const isUpdated_en = await this.meridianService_en.updateByCode(
          updateMeridianReqDto.code,
          updateMeridianReqDto,
        );
        return isUpdated_en;
    }
  }
}
