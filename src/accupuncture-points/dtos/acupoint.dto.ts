export class AcupointDto {
  id: string;
  code: string;
  name: string;
  description: string;
  anatomy: string;
  technique: string;
  functionality: string[];
}

export class AcupointResponeDto {
  'vi': AcupointDto;
  'en': AcupointDto;
}
