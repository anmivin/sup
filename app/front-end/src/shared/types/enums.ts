export enum LANGUAGE {
  ru = 'Русский',
  en = 'English',
}

export enum GAME_PART {
  One = 'The Sims 1',
  Two = 'The Sims 2',
  Three = 'The Sims 3',
  Four = 'The Sims 4',
}

export enum LIFE_STAGE {
  baby = 'baby',
  infant = 'infant',
  toddler = 'toddler',
  child = 'child',
  teen = 'teen',
  youngadult = 'youngadult',
  adult = 'adult',
  elder = 'elder',
}

export const LifeStagesVariants: Record<GAME_PART, LIFE_STAGE[]> = {
  [GAME_PART.One]: [LIFE_STAGE.baby, LIFE_STAGE.child, LIFE_STAGE.adult],
  [GAME_PART.Two]: [
    LIFE_STAGE.baby,
    LIFE_STAGE.toddler,
    LIFE_STAGE.child,
    LIFE_STAGE.teen,
    LIFE_STAGE.youngadult,
    LIFE_STAGE.adult,
    LIFE_STAGE.elder,
  ],
  [GAME_PART.Three]: [
    LIFE_STAGE.baby,
    LIFE_STAGE.toddler,
    LIFE_STAGE.child,
    LIFE_STAGE.teen,
    LIFE_STAGE.youngadult,
    LIFE_STAGE.adult,
    LIFE_STAGE.elder,
  ],
  [GAME_PART.Four]: [
    LIFE_STAGE.baby,
    LIFE_STAGE.infant,
    LIFE_STAGE.toddler,
    LIFE_STAGE.child,
    LIFE_STAGE.teen,
    LIFE_STAGE.youngadult,
    LIFE_STAGE.adult,
    LIFE_STAGE.elder,
  ],
};
export enum LIFE_STATE {
  human = 'human',
  ghost = 'ghost',
  witch = 'witch',
  alien = 'alien',
  bigfoot = 'bigfoot',
  genie = 'genie',
  plantsim = 'plantsim',
  servo = 'servo',
  vampire = 'vampire',
  werewolf = 'werewolf',
  zombie = 'zombie',
  fairy = 'fairy',
  mermaid = 'mermaid',
  imaginaryfriend = 'imaginaryfriend',
  mummy = 'mummy',
  plumbot = 'plumbot',
  simbot = 'simbot',
  spellcaster = 'spellcaster',
}
export const LifeStatesVariants: Record<GAME_PART, LIFE_STATE[]> = {
  [GAME_PART.One]: [LIFE_STATE.human, LIFE_STATE.ghost, LIFE_STATE.witch],
  [GAME_PART.Two]: [
    LIFE_STATE.human,
    LIFE_STATE.ghost,
    LIFE_STATE.witch,
    LIFE_STATE.alien,
    LIFE_STATE.bigfoot,
    LIFE_STATE.plantsim,
    LIFE_STATE.servo,
    LIFE_STATE.vampire,
    LIFE_STATE.werewolf,
    LIFE_STATE.zombie,
  ],
  [GAME_PART.Three]: [
    LIFE_STATE.human,
    LIFE_STATE.ghost,
    LIFE_STATE.witch,
    LIFE_STATE.alien,
    LIFE_STATE.genie,
    LIFE_STATE.plantsim,
    LIFE_STATE.vampire,
    LIFE_STATE.werewolf,
    LIFE_STATE.fairy,
    LIFE_STATE.mermaid,
    LIFE_STATE.imaginaryfriend,
    LIFE_STATE.mummy,
    LIFE_STATE.plumbot,
    LIFE_STATE.simbot,
  ],
  [GAME_PART.Four]: [
    LIFE_STATE.human,
    LIFE_STATE.ghost,
    LIFE_STATE.alien,
    LIFE_STATE.servo,
    LIFE_STATE.vampire,
    LIFE_STATE.werewolf,
    LIFE_STATE.mermaid,
    LIFE_STATE.spellcaster,
  ],
};
export enum SEX {
  male = 'male',
  female = 'female',
}

export enum DRAWER_VARIANTS {
  Create = 'create',
  Edit = 'edit',
  Read = 'read',
}

export enum SIGN_FORM_VARIANTS {
  SignUp = 'signUp',
  SignIn = 'signIn',
}

export enum PARTNERSHIP {
  divorced = 'divorced',
  engaged = 'engaged',
  exes = 'exes',
  married = 'married',
  partners = 'partners',
}

export enum READONLY_BUCKET_NAMES {
  Icons = 'icons',
  Translation = 'translation',
  DataBase = 'dataBase',
  WorldImage = 'worldImage',
}

export enum PUBLIC_BUCKET_NAMES {
  Avatars = 'avatars',
  SimImage = 'simimage',
  TreeImage = 'treeimage',
  Debug = 'debug',
}

export enum USER_ROLES {
  loggedOut = 'loggedOut',
  simpleUser = 'simple',
  uberUser = 'payed',
}
