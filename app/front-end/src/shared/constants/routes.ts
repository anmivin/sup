import { ReactElement } from 'react';

import Challenges from '@pages/challenges';
import Tracker from '@pages/tracker';
import Trees from '@pages/trees';
import Worlds from '@pages/worlds';
import Tree from '@pages/worldsmap/[key]';

import { components } from '../api/TranslationsApi';

interface RoutesProps {
  link: string;
  key: keyof components['schemas']['PagesBasicTranslationDto'];
  visible?: boolean;
  Component: () => ReactElement;
}

const menuRoutes: RoutesProps[] = [
  { link: '/trees', key: 'trees', Component: Trees },
  { link: '/challenges', key: 'challenges', Component: Challenges },
  /* { link: '/challenges/randomizer', key: 'randomizer', group: 'challenges', Component }, */
  { link: '/worlds', key: 'worlds', Component: Worlds },
  { link: '/tracker', key: 'tracker', Component: Tracker },
  { link: '/tree/:key', key: 'trees', Component: Tree },
];

const profileRoutes: RoutesProps[] = [
  { link: '/profile/mypage', key: 'profile', Component: Challenges },
  { link: '/profile/settings', key: 'settings', Component: Challenges },
];

export default { menuRoutes, profileRoutes };
