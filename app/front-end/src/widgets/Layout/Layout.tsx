import { ReactNode, useMemo } from 'react';

import { useStore } from 'zustand';

import Header from '@features/Header';
import SignForm from '@features/SignForm';

import HelpSection from '@entities/HelpSection/HelpSection';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { ContentBox } from './Layout.styled';

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
