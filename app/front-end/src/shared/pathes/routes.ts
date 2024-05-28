import { ReactElement } from 'react';

import Challenges from '@pages/challenges';
import Tracker from '@pages/tracker';
import Trees from '@pages/trees';
import Worlds from '@pages/worlds';

import { components } from '../api/TranslationsApi';

interface RoutesProps {
  link: string;
  key: keyof components['schemas']['PagesBasicTranslationDto'];
  group: string;
  visible?: boolean;
  Component: () => ReactElement;
}

export const routes: RoutesProps[] = [
  { link: '/profile/mypage', key: 'profile', group: 'profile', Component: Challenges },
  { link: '/profile/settings', key: 'settings', group: 'profile', Component: Challenges },
  { link: '/trees', key: 'trees', group: 'main', Component: Trees },
  { link: '/challenges', key: 'challenges', group: 'challenges', Component: Challenges },
  /* { link: '/challenges/randomizer', key: 'randomizer', group: 'challenges', Component }, */
  { link: '/worlds', key: 'worlds', group: 'main', Component: Worlds },
  { link: '/tracker', key: 'tracker', group: 'main', Component: Tracker },
];
