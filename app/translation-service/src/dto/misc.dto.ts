import { ApiProperty, ApiExtraModels } from '@nestjs/swagger';

export class LifeStagesTranslationDto {
  @ApiProperty()
  baby: string;
  @ApiProperty()
  infant: string;
  @ApiProperty()
  toddler: string;
  @ApiProperty()
  child: string;
  @ApiProperty()
  teen: string;
  @ApiProperty()
  youngadult: string;
  @ApiProperty()
  adult: string;
  @ApiProperty()
  elder: string;
}

export class LifeStatesTranslationDto {
  @ApiProperty()
  human: string;
  @ApiProperty()
  ghost: string;
  @ApiProperty()
  witch: string;
  @ApiProperty()
  alien: string;
  @ApiProperty()
  bigfoot: string;
  @ApiProperty()
  genie: string;
  @ApiProperty()
  plantsim: string;
  @ApiProperty()
  servo: string;
  @ApiProperty()
  vampire: string;
  @ApiProperty()
  werewolf: string;
  @ApiProperty()
  zombie: string;
  @ApiProperty()
  fairy: string;
  @ApiProperty()
  mermaid: string;
  @ApiProperty()
  imaginaryfriend: string;
  @ApiProperty()
  mummy: string;
  @ApiProperty()
  plumbot: string;
  @ApiProperty()
  simbot: string;
  @ApiProperty()
  spellcaster: string;
}

export class MiscTranslationNoLangDto {
  @ApiProperty()
  lifeStage: LifeStagesTranslationDto;
  @ApiProperty()
  lifeState: LifeStagesTranslationDto;
}

@ApiExtraModels(MiscTranslationNoLangDto)
export class MiscTranslationDto {
  @ApiProperty()
  data: MiscTranslationNoLangDto;
}
