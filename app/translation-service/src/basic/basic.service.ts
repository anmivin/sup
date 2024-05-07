import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseTranslationModel } from '../models/base.model';
import { groupBy } from 'lodash';
import { BasicTranslationDto } from '@translations/dto/base.dto';
@Injectable()
export class BasicService {
  constructor(@InjectModel(BaseTranslationModel) private baseTranslationModel: typeof BaseTranslationModel) {}

  async getBaseTranslations(lang: 'ru' | 'en'): Promise<BasicTranslationDto> {
    const translations = await this.baseTranslationModel.findAll();

    const trans = groupBy(translations, (translation) => translation.key.split('_')[0]);
    const getTrans = (lang: 'ru' | 'en') => {
      const obj: any = { ru: {}, en: {} };
      Object.keys(trans).forEach((key) => {
        obj.ru[key] = Object.fromEntries(trans[key].map((trans) => [trans.key.split('_')[1], trans.ru_name]));
        obj.en[key] = Object.fromEntries(trans[key].map((trans) => [trans.key.split('_')[1], trans.en_name]));
      });

      return obj[lang];
    };

    return { data: getTrans(lang) };
  }
}
