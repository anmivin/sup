export enum IconPaths {
  Achievements = '',
}

export enum Languages {
  ru = 'Русский',
  en = 'English',
}

export enum GameParts {
  One = 'The Sims 1',
  Two = 'The Sims 2',
  Three = 'The Sims 3',
  Four = 'The Sims 4',
}

export enum LIFE_STATES {
  Sim = 'Сим',
  Vampire = 'Вампир',
  Mermaid = 'Русалка',
  Werewoolf = 'Оборотень',
  Ghost = 'Призрак',
  Magician = 'Маг',
  Alien = 'Прищелец',
}

export enum LIFE_STAGE {
  NewBorn = 'Новорождённый',
  Infant = 'Младенец',
  Toddler = 'Малыш',
  Child = 'Ребёнок',
  Teen = 'Подросток',
  YoungAdult = 'Молодой',
  Adult = 'Взрослый',
  Elder = 'Пожилой',
}

export enum SEX {
  Male = 'Мужчина',
  Female = 'Женщина',
}

export enum EVERYTHING_VALUES_VARIATIONS {
  Traits = 'Черты',
  Aspirations = 'Жизненные цели',
  Collections = 'Коллекции',
  Skills = 'Навыки',
  Achievements = 'Достияжения',
  Misc = 'Разное',
}

export interface FieldProps {
  name: string;
  value: string;
}

export interface MemberProps {
  name: string;
  sex: SEX;
  fieldsArray: FieldProps[];
}
