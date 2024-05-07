import {
  OutputAchievement4Dto,
  OutputAchievementList4Dto,
  OutputAspiration4Dto,
  OutputAspirationList4Dto,
  OutputCareer4Dto,
  OutputCareerList4Dto,
  OutputCollection4Dto,
  OutputCollectionList4Dto,
  OutputDeaths4Dto,
  OutputFears4Dto,
  OutputSkill4Dto,
  OutputSkillList4Dto,
  OutputTrait4Dto,
  OutputTraitList4Dto,
} from '@back/handbook/handbook.dto';
import { Achievement4Model } from '@back/handbook/models/models.4/achievements.model';
import { Aspiration4Model } from '@back/handbook/models/models.4/aspirations.model';
import { Career4Model } from '@back/handbook/models/models.4/careers.model';
import { CollectionItem4Model } from '@back/handbook/models/models.4/collection-item.model';
import { Collection4Model } from '@back/handbook/models/models.4/collections.model';
import { Death4Model } from '@back/handbook/models/models.4/deaths.model';
import { Fear4Model } from '@back/handbook/models/models.4/fears.model';
import { Skill4Model } from '@back/handbook/models/models.4/skills.model';
import { Trait4Model } from '@back/handbook/models/models.4/traits.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class HandbookService {
  constructor(
    @InjectModel(Achievement4Model) private achievementModel: typeof Achievement4Model,
    @InjectModel(Aspiration4Model) private aspirationModel: typeof Aspiration4Model,
    @InjectModel(Career4Model) private careerModel: typeof Career4Model,
    @InjectModel(Collection4Model) private collectionModel: typeof Collection4Model,
    @InjectModel(CollectionItem4Model) private collectionItemModel: typeof CollectionItem4Model,
    @InjectModel(Death4Model) private deathModel: typeof Death4Model,
    @InjectModel(Fear4Model) private fearModel: typeof Fear4Model,
    @InjectModel(Skill4Model) private skillModel: typeof Skill4Model,
    @InjectModel(Trait4Model) private traitModel: typeof Trait4Model,
  ) {}

  async getAllAchievements(): Promise<OutputAchievementList4Dto[]> {
    return await this.achievementModel.findAll({ attributes: ['key', 'icon'] });
  }

  async getAchievementByKey(key: string): Promise<OutputAchievement4Dto> {
    const achievement = await this.achievementModel.findByPk(key);
    if (!achievement) throw new Error('Не найдено');
    return achievement;
  }

  async getAllAspirations(): Promise<OutputAspirationList4Dto[]> {
    return await this.aspirationModel.findAll({ attributes: ['key', 'icon', 'group'] });
  }

  async getAspirationByKey(key: string): Promise<OutputAspiration4Dto> {
    const aspiration = await this.aspirationModel.findByPk(key);
    if (!aspiration) throw new Error('Не найдено');
    return aspiration;
  }

  async getAllCareers(): Promise<OutputCareerList4Dto[]> {
    return await this.careerModel.findAll({ attributes: ['key', 'icon'] });
  }

  async getCareerByKey(key: string): Promise<OutputCareer4Dto> {
    const career = await this.careerModel.findByPk(key);
    if (!career) throw new Error('Не найдено');
    return career;
  }

  async getAllCollections(): Promise<OutputCollectionList4Dto[]> {
    return await this.collectionModel.findAll({ attributes: ['key', 'count'] });
  }

  async getCollectionByKey(key: string): Promise<OutputCollection4Dto> {
    const collection = await this.collectionModel.findOne({
      where: { key },
      attributes: ['key'],
      include: { model: this.collectionItemModel, attributes: ['key', 'icon'] },
    });
    if (!collection) throw new Error('Не найдено');

    return collection;
  }

  async getAllDeaths(): Promise<OutputDeaths4Dto[]> {
    return await this.deathModel.findAll();
  }

  async getDeathByKey(key: string): Promise<OutputDeaths4Dto> {
    const death = await this.deathModel.findByPk(key);
    if (!death) throw new Error('Не найдено');
    return death;
  }

  async getAllFears(): Promise<OutputFears4Dto[]> {
    return await this.fearModel.findAll();
  }

  async getFearByKey(key: string): Promise<OutputFears4Dto> {
    const fear = await this.fearModel.findByPk(key);
    if (!fear) throw new Error('Не найдено');
    return fear;
  }

  async getAllSkills(): Promise<OutputSkillList4Dto[]> {
    return await this.skillModel.findAll();
  }

  async getSkillByKey(key: string): Promise<OutputSkill4Dto> {
    const skill = await this.skillModel.findByPk(key);
    if (!skill) throw new Error('Не найдено');
    return skill;
  }

  async getAllTraits(): Promise<OutputTraitList4Dto[]> {
    return await this.traitModel.findAll();
  }

  async getTraitByKey(key: string): Promise<OutputTrait4Dto> {
    const trait = await this.traitModel.findByPk(key);
    if (!trait) throw new Error('Не найдено');
    return trait;
  }
}
