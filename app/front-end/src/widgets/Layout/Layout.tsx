import { ReactNode, useMemo } from 'react';

import { useStore } from 'zustand';

import HelpSection from '@widgets/HelpSection/HelpSection';
../../fetures/Header/Header
import Header from '@entities/Header/Header';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { ContentBox } from './Layout.styled';

import SignForm from '../../fetures/SignForm';

const Layout = ({ children }: { children: ReactNode }) => {
  const { isSignFormOpen, setIsSignFormOpen } = useStore(ProfileStore);

  const isError = useMemo(() => {
    return false;
  }, []);

  return (
    <>
      {!isError && <Header />}
      <ContentBox $noHeader={isError}>{children}</ContentBox>
      <HelpSection />
      <SignForm open={isSignFormOpen} onClose={() => setIsSignFormOpen(false)} />
    </>
  );
};

export default Layout;
