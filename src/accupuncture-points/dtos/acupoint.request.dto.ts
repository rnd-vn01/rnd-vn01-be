import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { LanguageEnum } from '../../shared/enums/language.enum';

export class GetAcupointRequestDto {
  @ApiProperty({ enum: LanguageEnum })
  @IsEnum(LanguageEnum)
  language: LanguageEnum;

  @ApiPropertyOptional()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Transform((code) => {
    return code.value.toUpperCase();
  })
  code?: string;
}

export class CreateAcupointRequestDto {
  @ApiProperty()
  @IsString()
  code: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  anatomy: string;

  @ApiProperty()
  @IsString()
  technique: string;

  @ApiProperty()
  @IsString()
  functionalities: string[];
}

export class UpdateAcupointRequestDto extends PartialType(
  CreateAcupointRequestDto,
) {}
