import { LanguageEnum } from '../../shared/enums/language.enum';
export declare class GetMeridianRequestDto {
    language: LanguageEnum;
    code?: string;
}
export declare class CreateMeridianRequestDto {
    code: string;
    name: string;
    description: string;
    diseases: string;
    points: string[];
}
declare const UpdateMeridianRequestDto_base: import("@nestjs/common").Type<Partial<CreateMeridianRequestDto>>;
export declare class UpdateMeridianRequestDto extends UpdateMeridianRequestDto_base {
}
export {};
