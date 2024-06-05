import { ApiProperty, ApiExtraModels } from '@nestjs/swagger';

export class PagesBasicTranslationDto {
  @ApiProperty()
  error: string;
  @ApiProperty()
  profile: string;
  @ApiProperty()
  login: string;
  @ApiProperty()
  logout: string;
  @ApiProperty()
  signup: string;
  @ApiProperty()
  settings: string;
  @ApiProperty()
  trees: string;
  @ApiProperty()
  challenges: string;
  @ApiProperty()
  randomizer: string;
  @ApiProperty()
  handbook: string;
  @ApiProperty()
  worlds: string;
  @ApiProperty()
  tracker: string;
}

export class UtilityBasicTranslationDto {
  @ApiProperty()
  open: string;
  @ApiProperty()
  close: string;
  @ApiProperty()
  save: string;
  @ApiProperty()
  cancel: string;
  @ApiProperty()
  continue: string;
  @ApiProperty()
  complete: string;
  @ApiProperty()
  reset: string;
  @ApiProperty()
  back: string;
  @ApiProperty()
  exit: string;
  @ApiProperty()
  create: string;
  @ApiProperty()
  edit: string;
  @ApiProperty()
  delete: string;
  @ApiProperty()
  nooption: string;
}

export class FormsBasicTranslationDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  browse: string;
  @ApiProperty()
  drag: string;
}

export class MiscBasicTranslationDto {
  @ApiProperty()
  sim: string;
  @ApiProperty()
  tree: string;
}

export class BasicTranslationNoLangDto {
  @ApiProperty()
  pages: PagesBasicTranslationDto;
  @ApiProperty()
  utility: UtilityBasicTranslationDto;
  @ApiProperty()
  forms: FormsBasicTranslationDto;
  @ApiProperty()
  misc: MiscBasicTranslationDto;
}

@ApiExtraModels(BasicTranslationNoLangDto)
export class BasicTranslationDto {
  @ApiProperty()
  data: BasicTranslationNoLangDto;
}
