import { LanguageEnum } from '../../shared/enums/language.enum';
export declare class GetAcupointRequestDto {
    language: LanguageEnum;
    code?: string;
}
export declare class CreateAcupointRequestDto {
    code: string;
    name: string;
    description: string;
    anatomy: string;
    technique: string;
    functionalities: string[];
    caution: string;
}
declare const UpdateAcupointRequestDto_base: import("@nestjs/common").Type<Partial<CreateAcupointRequestDto>>;
export declare class UpdateAcupointRequestDto extends UpdateAcupointRequestDto_base {
}
export {};
