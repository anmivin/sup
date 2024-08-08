import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {
  TreeRelatedTranslationModel,
  OtheTranslationModel,
} from '../models/base.model';
import { groupBy } from 'lodash';
import { MiscTranslationDto } from '@translations/dto/misc.dto';

import { TreeTranslationDto } from '@translations/dto/tree.dto';
@Injectable()
export class MiscService {
  constructor(
    @InjectModel(OtheTranslationModel)
    private otheTranslationModel: typeof OtheTranslationModel,
    @InjectModel(TreeRelatedTranslationModel)
    private treeRelatedTranslationModel: typeof TreeRelatedTranslationModel,
  ) {}

  async getMiscTranslations(lang: 'ru' | 'en'): Promise<MiscTranslationDto> {
    const translations = await this.otheTranslationModel.findAll();

    const trans = groupBy(
      translations,
      (translation) => translation.key.split('_')[0],
    );
    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = { ru: {}, en: {} };
      Object.keys(trans).forEach((key) => {
        obj.ru[key] = Object.fromEntries(
          trans[key].map((trans) => [trans.key.split('_')[1], trans.ru_name]),
        );
        obj.en[key] = Object.fromEntries(
          trans[key].map((trans) => [trans.key.split('_')[1], trans.en_name]),
        );
      });

      return obj[lang];
    };

    return { data: getTrans(lang) };
  }

  async getTreeTranslations(lang: 'ru' | 'en'): Promise<TreeTranslationDto> {
    const translations = await this.treeRelatedTranslationModel.findAll();

    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = { ru: {}, en: {} };
      translations.forEach((trans) => {
        console.log(trans.key, trans.ru_name);
        obj.ru[trans.key] = trans.ru_name;
        obj.en[trans.key] = trans.en_name;
      });

      return obj[lang];
    };

    return { data: getTrans(lang) };
  }
}
