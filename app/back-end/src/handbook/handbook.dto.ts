import { ApiProperty } from '@nestjs/swagger';

export enum AspirationGroup {
  Animal = 'aspiration_group_001_animal',
  Athletic = 'aspiration_group_002_athletic',
  Creativity = 'aspiration_group_003_creativity',
  Deviance = 'aspiration_group_004_deviance',
  Family = 'aspiration_group_005_family',
  Food = 'aspiration_group_006_food',
  Fortune = 'aspiration_group_007_fortune',
  Knowledge = 'aspiration_group_008_knowledge',
  Love = 'aspiration_group_009_love',
  Location = 'aspiration_group_010_location',
  Nature = 'aspiration_group_011_nature',
  Popularity = 'aspiration_group_012_popularity',
  StarWars = 'aspiration_group_013_starwars',
  Wellness = 'aspiration_group_014_wellness',
  Werewolf = 'aspiration_group_015_werewolf',
  Child = 'aspiration_group_016_child',
  Teen = 'aspiration_group_017_teen',
}

export enum TraitGroup {
  Emotional = 'trait_group_001_emotional',
  Hobby = 'trait_group_002_hobby',
  Lifestyle = 'trait_group_003_lifestyle',
  Social = 'trait_group_004_social',
  Toddler = 'trait_group_005_toddler',
  Infant = 'trait_group_006_infant',
  Bonus = 'trait_group_007_bonus',
  AspirationReward = 'trait_group_008_aspirationreward',
  SatisfactionReward = 'Satisfaction reward',
  CareerReward = 'trait_group_010_careerreward',
  FoodMastery = 'trait_group_011_foodmastery',
  Inherited = 'trait_group_012_inherited',
  CharacteValue = 'trait_group_013_charactervalue',
}

export enum Age {
  Infant = 'infant',
  Toddler = 'toddler',
  Child = 'child',
  Teen = 'teen',
  Adult = 'adult',
}

export class OutputAchievementList4Dto {
  @ApiProperty({ description: 'Achievement key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Achievement icon', nullable: false })
  iconPath: string;
}
export class OutputAchievement4Dto {
  @ApiProperty({ description: 'Achievement key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Achievement icon', nullable: false })
  iconPath: string;
  @ApiProperty({
    description: 'Points you get for achievement',
    nullable: false,
  })
  points: number;
}

export class OutputAspirationList4Dto {
  @ApiProperty({ description: 'Aspiration key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Aspiration icon', nullable: false })
  iconPath: string;
  @ApiProperty({
    description: 'Aspiration group key',
    nullable: false,
    enum: AspirationGroup,
  })
  group: AspirationGroup;
}
export class OutputAspiration4Dto {
  @ApiProperty({ description: 'Aspiration key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Aspiration icon', nullable: false })
  iconPath: string;
  @ApiProperty({ description: 'Aspiration steps count', nullable: false })
  steps: number;
  @ApiProperty({
    description: 'Aspiration group key',
    nullable: false,
    enum: AspirationGroup,
  })
  group: AspirationGroup;
  @ApiProperty({
    description: 'Bonus trait Sim gets after completing aspiration',
    nullable: false,
  })
  bonus: string;
}

export class OutputCareerList4Dto {
  @ApiProperty({ description: 'Career key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Career icon', nullable: false })
  iconPath: string;
}
export class OutputCareer4Dto {
  @ApiProperty({ description: 'Career key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Career icon', nullable: false })
  iconPath: string;
}

export class OutputCollectionItemList4Dto {
  @ApiProperty({ description: 'Collection item key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Collection item icon', nullable: false })
  iconPath: string;
}

export class OutputCollectionItem4Dto {
  @ApiProperty({ description: 'Collection item key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Collection item icon', nullable: false })
  iconPath: string;
  @ApiProperty({ description: 'Collection key', nullable: false })
  collectionKey: string;
}

export class OutputCollectionList4Dto {
  @ApiProperty({ description: 'Collection key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Amount of items', nullable: false })
  count: number;
}
export class OutputCollection4Dto {
  @ApiProperty({ description: 'Collection key', nullable: false })
  key: string;
  @ApiProperty({
    description: 'Amount of items',
    nullable: false,
    isArray: true,
    type: OutputCollectionItemList4Dto,
  })
  collectionItems: OutputCollectionItemList4Dto[];
}

export class OutputDeaths4Dto {
  @ApiProperty({ description: 'Death key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Pack key', nullable: false })
  part: string;
}

export class OutputFears4Dto {
  @ApiProperty({ description: 'Fear key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Fear icon', nullable: false })
  iconPath: string;
}

export class OutputSkillList4Dto {
  @ApiProperty({ description: 'Skill key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Skill icon', nullable: false })
  iconPath: string;
  @ApiProperty({
    description: 'Age since which skill available',
    nullable: false,
    enum: Age,
  })
  age: Age;
  @ApiProperty({ description: 'Amount of skill steps', nullable: false })
  steps: number;
}
export class OutputSkill4Dto {
  @ApiProperty({ description: 'Skill key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Skill icon', nullable: false })
  iconPath: string;
  @ApiProperty({
    description: 'Age since which skill available',
    nullable: false,
    enum: Age,
  })
  age: Age;
  @ApiProperty({ description: 'Amount of skill steps', nullable: false })
  steps: number;
}

export class OutputTraitList4Dto {
  @ApiProperty({ description: 'Trait key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Trait icon', nullable: false })
  iconPath: string;
  @ApiProperty({
    description: 'Trait group key',
    nullable: false,
    enum: TraitGroup,
  })
  group: TraitGroup;
}

export class OutputTrait4Dto {
  @ApiProperty({ description: 'Trait key', nullable: false })
  key: string;
  @ApiProperty({ description: 'Trait icon', nullable: false })
  iconPath: string;
  @ApiProperty({
    description: 'Trait group key',
    nullable: false,
    enum: TraitGroup,
  })
  group: TraitGroup;
}

export class OutputInitDto {
  aspirations: Omit<OutputAspirationList4Dto, 'iconPath'>[];
  careers: Omit<OutputCareerList4Dto, 'iconPath'>[];
  deaths: OutputDeaths4Dto[];
  skills: Omit<OutputSkillList4Dto, 'iconPath'>[];
  traits: Omit<OutputTraitList4Dto, 'iconPath'>[];
}
