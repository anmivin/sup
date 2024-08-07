import { ReactElement } from 'react';

import Challenges from '@pages/challenges';
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
  { link: '/tree/:key', key: 'trees', Component: Tree },
  { link: '/world/:key', key: 'worlds', Component: World },
];

const profileRoutes: RoutesProps[] = [
  { link: '/profile/mypage', key: 'profile', Component: Challenges },
  { link: '/profile/settings', key: 'settings', Component: Challenges },
];

export default {
  menuRoutes,
  profileRoutes,
  noMenuRoutes,
  allRoutes: [...menuRoutes, ...noMenuRoutes, ...profileRoutes],
};
