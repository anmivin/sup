import { ReactElement } from 'react';

import Building from '@pages/building';
import Challenges from '@pages/challenges';
import Profile from '@pages/profile';
import Randomizer from '@pages/randomizer';
import Settings from '@pages/settings';
import Tracker from '@pages/tracker';
import Tree from '@pages/tree';
import Trees from '@pages/trees';
import World from '@pages/world';
import Worlds from '@pages/worlds';

import { components } from '../api/TranslationsApi';

interface RoutesProps {
  link: string;
  key: keyof components['schemas']['PagesBasicTranslationDto'];
  visible?: boolean;
  Component: () => ReactElement;
}

const menuRoutes: RoutesProps[] = [
  { link: '/trees', key: 'trees', Component: Trees },
  { link: '/worlds', key: 'worlds', Component: Worlds },
  { link: '/challenges', key: 'challenges', Component: Challenges },
  { link: '/tracker', key: 'tracker', Component: Tracker },
];

const noMenuRoutes: RoutesProps[] = [
  { link: '/tree/:key', key: 'tree', Component: Tree },
  { link: '/world/:key', key: 'world', Component: World },
  { link: '/challenges/randomizer', key: 'randomizer', Component: Randomizer },
  { link: '/building/:key', key: 'building', Component: Building },
];

const profileRoutes: RoutesProps[] = [
  { link: '/profile/mypage', key: 'profile', Component: Profile },
  { link: '/profile/settings', key: 'settings', Component: Settings },
];

export default {
  menuRoutes,
  profileRoutes,
  noMenuRoutes,
  allRoutes: [...menuRoutes, ...noMenuRoutes, ...profileRoutes],
};
