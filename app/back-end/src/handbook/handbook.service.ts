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
  OutputSkill4Dto,
  OutputSkillList4Dto,
  OutputTrait4Dto,
  OutputTraitList4Dto,
} from '@back/handbook/handbook.dto';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { Achievement4Model } from '@back/handbook/models/models.4/achievements.model';
import { Aspiration4Model } from '@back/handbook/models/models.4/aspirations.model';
import { Career4Model } from '@back/handbook/models/models.4/careers.model';
import { CollectionItem4Model } from '@back/handbook/models/models.4/collection-item.model';
import { Collection4Model } from '@back/handbook/models/models.4/collections.model';
import { Death4Model } from '@back/handbook/models/models.4/deaths.model';
import { Skill4Model } from '@back/handbook/models/models.4/skills.model';
import { Trait4Model } from '@back/handbook/models/models.4/traits.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FileModel } from '@file/file.model';
@Injectable()
export class HandbookService {
  constructor(
    @InjectModel(Achievement4Model)
    private achievementModel: typeof Achievement4Model,
    @InjectModel(Aspiration4Model)
    private aspirationModel: typeof Aspiration4Model,
    @InjectModel(Career4Model) private careerModel: typeof Career4Model,
    @InjectModel(Collection4Model)
    private collectionModel: typeof Collection4Model,
    @InjectModel(CollectionItem4Model)
    private collectionItemModel: typeof CollectionItem4Model,
    @InjectModel(Death4Model) private deathModel: typeof Death4Model,
    @InjectModel(Skill4Model) private skillModel: typeof Skill4Model,
    @InjectModel(Trait4Model) private traitModel: typeof Trait4Model,
    @InjectModel(FileModel) private fileModel: typeof FileModel,
    private readonly i18n: I18nService,
  ) {}

  async addIcon(item: any) {
    const icon = await this.fileModel.findOne({
      where: { id: item.iconId },
    });

    return { ...item, icon: icon?.path };
  }

  async getAllAchievements(): Promise<OutputAchievementList4Dto[]> {
    const achievements = await this.achievementModel.findAll({
      attributes: ['key', 'iconId'],
    });

    const achievementsWithIcons = await Promise.all(
      achievements.map(async (item) => await this.addIcon(item)),
    );

    return achievementsWithIcons;
  }

  async getAchievementByKey(key: string): Promise<OutputAchievement4Dto> {
    const achievement = await this.achievementModel.findByPk(key);
    if (!achievement) throw new Error('Не найдено');
    return await this.addIcon(achievement);
  }

  async getAllAspirations(): Promise<OutputAspirationList4Dto[]> {
    const aspirations = await this.aspirationModel.findAll({
      attributes: ['key', 'iconId', 'group'],
    });
    const aspirationsWithIcons = await Promise.all(
      aspirations.map(async (item) => await this.addIcon(item)),
    );

    return aspirationsWithIcons;
  }

  async getAspirationByKey(key: string): Promise<OutputAspiration4Dto> {
    const aspiration = await this.aspirationModel.findByPk(key);
    if (!aspiration) throw new Error('Не найдено');
    return await this.addIcon(aspiration);
  }

  async getAllCareers(): Promise<OutputCareerList4Dto[]> {
    const careers = await this.careerModel.findAll({
      attributes: ['key', 'iconId'],
    });
    const careersWithIcons = await Promise.all(
      careers.map(async (item) => await this.addIcon(item)),
    );
    return careersWithIcons;
  }

  async getCareerByKey(key: string): Promise<OutputCareer4Dto> {
    const career = await this.careerModel.findByPk(key);
    if (!career) throw new Error('Не найдено');
    return await this.addIcon(career);
  }

  async getAllCollections(): Promise<OutputCollectionList4Dto[]> {
    return await this.collectionModel.findAll({
      attributes: ['key', 'count'],
    });
  }

  async getCollectionByKey(key: string): Promise<OutputCollection4Dto> {
    const collection = await this.collectionModel.findOne({
      where: { key },
      attributes: ['key'],
      include: {
        model: this.collectionItemModel,
        attributes: ['key', 'iconId'],
      },
    });
    if (!collection) throw new Error('Не найдено');

    return {
      ...collection,
      collectionItems: await Promise.all(
        collection.collectionItems.map(
          async (item) => await this.addIcon(item),
        ),
      ),
    };
  }

  async getAllDeaths(): Promise<OutputDeaths4Dto[]> {
    return await this.deathModel.findAll();
  }

  async getDeathByKey(key: string): Promise<OutputDeaths4Dto> {
    const death = await this.deathModel.findByPk(key);
    if (!death) throw new Error('Не найдено');
    return death;
  }

  async getAllSkills(): Promise<OutputSkillList4Dto[]> {
    const skills = (await this.skillModel.findAll()).map((item) => ({
      key: item.key,
      iconId: item.iconId,
      age: item.age,
      steps: item.steps,
    }));
    const skillsWithIcons = await Promise.all(
      skills.map(async (item) => await this.addIcon(item)),
    );
    return skillsWithIcons;
  }

  async getSkillByKey(key: string): Promise<OutputSkill4Dto> {
    const skill = await this.skillModel.findByPk(key);
    if (!skill) throw new Error('Не найдено');
    return await this.addIcon(skill);
  }

  async getAllTraits(): Promise<OutputTraitList4Dto[]> {
    const traits = await this.traitModel.findAll({
      attributes: ['key', 'iconId', 'group'],
    });
    const traitsWithIcons = await Promise.all(
      traits.map(async (item) => await this.addIcon(item)),
    );
    return traitsWithIcons;
  }

  async getTraitByKey(key: string): Promise<OutputTrait4Dto> {
    const trait = await this.traitModel.findByPk(key);
    if (!trait) throw new Error('Не найдено');
    return await this.addIcon(trait);
  }

  async getInitValues() {
    const aspirations = await this.getAllAspirations();
    const careers = await this.getAllCareers();
    const deaths = await this.getAllDeaths();
    const skills = await this.getAllSkills();
    const traits = await this.getAllTraits();
  }
}
