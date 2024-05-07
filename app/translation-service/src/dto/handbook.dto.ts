import { ApiProperty, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';

export enum Part {
  TheSims1 = 'sims_1',
  TheSims2 = 'sims_2',
  TheSims3 = 'sims_3',
  TheSims4 = 'sims_4',
}

export enum HandookKeys {
  achievement = 'achievement',
  aspiration = 'aspiration',
  aspirationGroup = 'aspiration_group',
  skill = 'skill',
  trait = 'trait',
  traitGroup = 'trait_group',
}

type numberFirst = '0' | '1' | '2';
type numberOther = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type keyName = string;

type achievement = `${HandookKeys.achievement}_${numberFirst}${numberOther}${numberOther}_${keyName}`;
type aspiration = `${HandookKeys.aspiration}_${numberFirst}${numberOther}${numberOther}_${keyName}`;
type aspirationGroup = `${HandookKeys.aspirationGroup}_${numberFirst}${numberOther}${numberOther}_${keyName}`;
type skill = `${HandookKeys.skill}_${numberFirst}${numberOther}${numberOther}_${keyName}`;
type trait = `${HandookKeys.trait}_${numberFirst}${numberOther}${numberOther}_${keyName}`;
type traitGroup = `${HandookKeys.traitGroup}_${numberFirst}${numberOther}${numberOther}_${keyName}`;

export class TranslationWithDescriptionDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}

@ApiExtraModels(TranslationWithDescriptionDto)
export class AchievementsDto {
  @ApiProperty({
    type: 'object',
    additionalProperties: { $ref: getSchemaPath(TranslationWithDescriptionDto) },
  })
  data: Record<achievement, TranslationWithDescriptionDto>;
}

export class AspirationGroupsDto {
  @ApiProperty({ type: 'object', additionalProperties: { type: 'string' } })
  data: Record<aspirationGroup, string>[];
}

export class AspirationStepDto {
  @ApiProperty()
  label: string;
  @ApiProperty()
  tasks: string[];
}
@ApiExtraModels(AspirationStepDto)
export class AspirationItemDto extends TranslationWithDescriptionDto {
  @ApiProperty({ type: 'object', additionalProperties: { $ref: getSchemaPath(AspirationStepDto) } })
  data: Record<string, AspirationStepDto>;
}

@ApiExtraModels(AspirationItemDto)
export class AspirationsDto {
  @ApiProperty({ type: 'object', additionalProperties: { $ref: getSchemaPath(AspirationItemDto) } })
  data: Record<aspiration, AspirationItemDto>;
}

@ApiExtraModels(TranslationWithDescriptionDto)
export class SkillsDto {
  @ApiProperty({ type: 'object', additionalProperties: { $ref: getSchemaPath(TranslationWithDescriptionDto) } })
  data: Record<string, TranslationWithDescriptionDto>;
}

export class TraitGroupsDto {
  @ApiProperty({ type: 'object', additionalProperties: { type: 'string' } })
  data: Record<string, string>;
}

@ApiExtraModels(TranslationWithDescriptionDto)
export class TraitsDto {
  @ApiProperty({ type: 'object', additionalProperties: { $ref: getSchemaPath(TranslationWithDescriptionDto) } })
  data: Record<string, TranslationWithDescriptionDto>;
}
