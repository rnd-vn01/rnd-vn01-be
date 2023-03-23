export declare class AcupointDto {
    _id: string;
    code: string;
    name: string;
    description: string;
    anatomy: string;
    technique: string;
    functionality: string[];
    caution: string;
}
export declare class AcupointResponeDto {
    'vi': AcupointDto;
    'en': AcupointDto;
}
