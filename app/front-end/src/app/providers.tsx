import { Suspense } from 'react';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { useStore } from 'zustand';

import '@app/i18n';

import Loader from '@entities/Loader/Loader';

import { ProfileStore } from '@stores/Profile/Profile.store';

import '@theme/fonts/simsSans.css';
import ThemeColorModeProvider from '@theme/theme.provider';

import { AbilityProvider } from '../shared/ability';
import Routing from './routing';

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const Providers = () => {
  const { isDarkTheme } = useStore(ProfileStore);

  return (
    <Suspense fallback={<Loader />}>
      <AbilityProvider>
        <GoogleOAuthProvider clientId={googleClientId ?? ''}>
          <ReactFlowProvider>
            <ThemeColorModeProvider isDarkTheme={isDarkTheme()}>
              <Routing />
            </ThemeColorModeProvider>
          </ReactFlowProvider>
        </GoogleOAuthProvider>
      </AbilityProvider>
    </Suspense>
  );
};

export default Providers;
