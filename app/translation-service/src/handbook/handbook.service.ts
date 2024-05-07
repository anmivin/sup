import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AspirationGroupsTranslationModel, TraitGroupsTranslationModel } from '../models/withPart.model';
import {
  AchievementsTranslationModel,
  AspirationsTranslationModel,
  SkillsTranslationModel,
  TraitsTranslationModel,
  AspirationStepsTranslationModel,
} from '../models/withDescription.model';

import {
  AchievementsDto,
  AspirationGroupsDto,
  AspirationsDto,
  SkillsDto,
  TraitGroupsDto,
  TraitsDto,
} from '@translations/dto/handbook.dto';

@Injectable()
export class HandbookService {
  constructor(
    @InjectModel(AchievementsTranslationModel)
    private achievementsTranslationModel: typeof AchievementsTranslationModel,
    @InjectModel(AspirationGroupsTranslationModel)
    private aspirationGroupsTranslationModel: typeof AspirationGroupsTranslationModel,
    @InjectModel(AspirationsTranslationModel)
    private aspirationsTranslationModel: typeof AspirationsTranslationModel,
    @InjectModel(AspirationStepsTranslationModel)
    private aspirationStepsTranslationModel: typeof AspirationStepsTranslationModel,
    @InjectModel(SkillsTranslationModel)
    private skillsTranslationModel: typeof SkillsTranslationModel,
    @InjectModel(TraitGroupsTranslationModel)
    private traitGroupsTranslationModel: typeof TraitGroupsTranslationModel,
    @InjectModel(TraitsTranslationModel)
    private traitsTranslationModel: typeof TraitsTranslationModel,
  ) {}

  async getAchievements(lang: 'ru' | 'en'): Promise<AchievementsDto> {
    const translations = await this.achievementsTranslationModel.findAll();
    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = {};
      obj.ru = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          { name: translation.ru_name, description: translation.ruDescription },
        ]),
      );
      obj.en = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          { name: translation.en_name, description: translation.enDescription },
        ]),
      );

      return obj[lang];
    };

    return { data: getTrans(lang) };
  }

  async getTraitGroups(lang: 'ru' | 'en'): Promise<TraitGroupsDto> {
    const translations = await this.traitGroupsTranslationModel.findAll();
    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = {};
      obj.ru = Object.fromEntries(translations.map((translation) => [translation.key, translation.ru_name]));
      obj.en = Object.fromEntries(translations.map((translation) => [translation.key, translation.en_name]));
      return obj[lang];
    };
    return { data: getTrans(lang) };
  }

  async getAspirationGroups(lang: 'ru' | 'en'): Promise<AspirationGroupsDto> {
    const translations = await this.aspirationGroupsTranslationModel.findAll();
    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = {};
      obj.ru = Object.fromEntries(translations.map((translation) => [translation.key, translation.ru_name]));
      obj.en = Object.fromEntries(translations.map((translation) => [translation.key, translation.en_name]));
      return obj[lang];
    };
    return { data: getTrans(lang) };
  }

  async getAspirations(lang: 'ru' | 'en'): Promise<AspirationsDto> {
    const translations = await this.aspirationsTranslationModel.findAll({
      include: [{ model: this.aspirationStepsTranslationModel }],
    });

    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = {};
      obj.ru = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          {
            name: translation.ru_name,
            description: translation.ruDescription,
            steps: Object.fromEntries(
              translation.items.map((item) => {
                const splittedKey = item.key.split('_');
                return [
                  `${splittedKey[2]}_${splittedKey[3]}`,
                  { label: item.ru_name, tasks: item.ruDescription.split('/') },
                ];
              }),
            ),
          },
        ]),
      );
      obj.en = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          {
            name: translation.en_name,
            description: translation.enDescription,
            steps: Object.fromEntries(
              translation.items.map((item) => {
                const splittedKey = item.key.split('_');
                return [
                  `${splittedKey[2]}_${splittedKey[3]}`,
                  { label: item.en_name, tasks: item.enDescription.split('/') },
                ];
              }),
            ),
          },
        ]),
      );
      return obj[lang];
    };
    return { data: getTrans(lang) };
  }

  async getSkills(lang: 'ru' | 'en'): Promise<SkillsDto> {
    const translations = await this.skillsTranslationModel.findAll();
    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = {};
      obj.ru = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          { name: translation.ru_name, description: translation.ruDescription },
        ]),
      );
      obj.en = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          { name: translation.en_name, description: translation.enDescription },
        ]),
      );
      return obj[lang];
    };
    return { data: getTrans(lang) };
  }

  async getTraits(lang: 'ru' | 'en'): Promise<TraitsDto> {
    const translations = await this.traitsTranslationModel.findAll();
    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = {};
      obj.ru = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          { name: translation.ru_name, description: translation.ruDescription },
        ]),
      );
      obj.en = Object.fromEntries(
        translations.map((translation) => [
          translation.key,
          { name: translation.en_name, description: translation.enDescription },
        ]),
      );
      return obj[lang];
    };
    return { data: getTrans(lang) };
  }
}
