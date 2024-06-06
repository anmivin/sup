import 'i18next';

import { components } from '@api/TranslationsApi';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: components['schemas']['BasicTranslationDto'];
      aspirations: components['schemas']['AspirationsDto'];
      traits: components['schemas']['TraitsDto'];
      skills: components['schemas']['SkillsDto'];
      aspirationGroups: components['schemas']['AspirationGroupsDto'];
      achievements: components['schemas']['AchievementsDto'];
      traitsGroups: components['schemas']['TraitGroupsDto'];
      misc: components['schemas']['MiscTranslationDto'];
      tree: components['schemas']['TreeTranslationDto'];
    };
  }
}
