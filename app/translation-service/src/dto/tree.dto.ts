import { ApiProperty, ApiExtraModels } from '@nestjs/swagger';

export class TreeRelatedTranslationDto {
  @ApiProperty()
  mainInfo: string;
  @ApiProperty()
  qualities: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  part: string;
  @ApiProperty()
  dead: string;
  @ApiProperty()
  deathCause: string;
  @ApiProperty()
  age: string;
  @ApiProperty()
  lifeState: string;
  @ApiProperty()
  parents: string;
  @ApiProperty()
  children: string;
  @ApiProperty()
  impregnationType: string;
  @ApiProperty()
  partners: string;
  @ApiProperty()
  relationType: string;
  @ApiProperty()
  collections: string;
  @ApiProperty()
  achievements: string;
  @ApiProperty()
  skills: string;
  @ApiProperty()
  aspirations: string;
  @ApiProperty()
  traits: string;
  @ApiProperty()
  lifeStyles: string;
  @ApiProperty()
  milestones: string;
}

@ApiExtraModels(TreeRelatedTranslationDto)
export class TreeTranslationDto {
  @ApiProperty()
  data: TreeRelatedTranslationDto;
}
