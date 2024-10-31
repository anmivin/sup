import { ReactElement } from 'react';

import Challenges from '@pages/challenges';
import Profile from '@pages/profile';
import Randomizer from '@pages/randomizer';
import Settings from '@pages/settings';
import Tracker from '@pages/tracker';
import Tree from '@pages/tree';
import Trees from '@pages/trees';
import World from '@pages/world';
import Worlds from '@pages/worlds';

import { Abilities } from '../../shared/ability/Ability';
import { components } from '../api/TranslationsApi';

interface RoutesProps {
  link: string;
  key: keyof components['schemas']['PagesBasicTranslationDto'];
  visible?: boolean;
  Component: () => ReactElement;
  can: Abilities;
}

const menuRoutes: RoutesProps[] = [
  { link: '/trees', key: 'trees', Component: Trees, can: Abilities.TREES },
  { link: '/worlds', key: 'worlds', Component: Worlds, can: Abilities.WORLDS },
  { link: '/challenges', key: 'challenges', Component: Challenges, can: Abilities.CHALLANGES },
  { link: '/tracker', key: 'tracker', Component: Tracker, can: Abilities.TRACKER },
];

const noMenuRoutes: RoutesProps[] = [
  { link: '/tree/:key', key: 'tree', Component: Tree, can: Abilities.TREE },
  { link: '/world/:key', key: 'world', Component: World, can: Abilities.WORLDS },
  { link: '/challenges/randomizer', key: 'randomizer', Component: Randomizer, can: Abilities.RANDOMIZER },
];

const profileRoutes: RoutesProps[] = [
  { link: '/profile/mypage', key: 'profile', Component: Profile, can: Abilities.PROFILE },
  { link: '/profile/settings', key: 'settings', Component: Settings, can: Abilities.SETTINGS },
];

export default {
  menuRoutes,
  profileRoutes,
  noMenuRoutes,
  allRoutes: [...menuRoutes, ...noMenuRoutes, ...profileRoutes],
};
