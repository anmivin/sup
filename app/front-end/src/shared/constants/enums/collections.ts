export enum COLLECTIONS {
  Aliens = "Пришельцы",
  Crystals = "Кристаллы",
  Elements = "Элементы",
  Fish = "Рыба",
  Fossils = "Окаменелости",
  Frogs = "Лягушки",
  Gardening = "Рстения",
  Metals = "Металлы",
  MicroscopePrints = "Микроскопические отпечатки",
  MySimsTrophies = "Трофеи MySims",
  Postcards = "Открытки",
  SpacePrints = "Космические снимки",
  SpaceRocks = "Метеориты",
  Insects = "Насекомые",
  Geodes = "Жеоды",
  ExperimentalFoodPrints = "Снимки эксперементальных блюд",
  VoidcritterCards = "Карточки монстров",
  Snowglobes = "Снежные шары",
  CityPosters = "Городские плакаты",
  AncientOmiscanArtifacts = "Древные омисканские артефакты",
  OmiscanTreasures = "Омискансие сокровища",
  MagicalArtifacts = "Магические артефакты",
  Simmies = "Фигурки симми",
  VillageFairRibbons = "Ленты ярморки",
  MessagesInBottles = "Послания в бутылке",
  HolidayCrackerPlushies = "Игрушки из хлопушек",
  Seashels = "Ракушки",
  BuriedTreasure = "Зарытое сокровище",
  DecorativeEggs = "Яйца",
  SugarSkulls = "Сахарные черепа",
  MagicBeans = "Магичсекие семена",
  PositivityPosters = "Плакаты Позитив",
}

export interface CollectionsProps {
  name: COLLECTIONS;
  description: string;
  count: number;
}

export const collections: CollectionsProps[] = [
  {
    name: COLLECTIONS.Aliens,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.AncientOmiscanArtifacts,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.BuriedTreasure,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.CityPosters,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Crystals,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.DecorativeEggs,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Elements,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.ExperimentalFoodPrints,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Fish,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Fossils,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Frogs,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Gardening,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Geodes,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.HolidayCrackerPlushies,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Insects,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.MagicBeans,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.MagicalArtifacts,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.MessagesInBottles,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Metals,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.MicroscopePrints,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.MySimsTrophies,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.OmiscanTreasures,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.PositivityPosters,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Postcards,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Seashels,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Simmies,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.Snowglobes,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.SpacePrints,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.SpaceRocks,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.SugarSkulls,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.VillageFairRibbons,
    description: "",
    count: 10,
  },
  {
    name: COLLECTIONS.VoidcritterCards,
    description: "",
    count: 10,
  } /* {
  name: COLLECTIONS.Aliens,
  description: '',
  count: 10,
},{
  name: COLLECTIONS.Aliens,
  description: '',
  count: 10,
},{
  name: COLLECTIONS.Aliens,
  description: '',
  count: 10,
},{
  name: COLLECTIONS.Aliens,
  description: '',
  count: 10,
}, */,
];
