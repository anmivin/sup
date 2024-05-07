import { ReactNode, useMemo } from 'react';

import HelpSection from '@widgets/HelpSection/HelpSection';
import classNames from 'classnames';
import { useStore } from 'zustand';

import Header from '@entities/Header/Header';
import SignForm from '@entities/SignForm';

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
      <ContentBox className={classNames({ isError: isError })}>{children}</ContentBox>
      <HelpSection />
      <SignForm open={isSignFormOpen} onClose={() => setIsSignFormOpen(false)} />
    </>
  );
};

export default Layout;
