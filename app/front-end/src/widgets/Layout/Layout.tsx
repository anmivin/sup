import { ReactNode, useMemo } from 'react';

import { useStore } from 'zustand';

import EditImageModal from '@features/EditImageModal';
import Header from '@features/Header';
import SignForm from '@features/SignForm';

import HelpSection from '@entities/HelpSection/HelpSection';

import { CommonStore } from '@stores/Common/Common.store';
import { ProfileStore } from '@stores/Profile/Profile.store';

import { ContentBox } from './Layout.styled';

import { Abilities, Can, CrudAbility } from '../../shared/ability/Ability';

ProfileStore.getState().me();
const Layout = ({ children }: { children: ReactNode }) => {
  const { isSignModalOpen, setIsSignModalOpen, isImageModalOpen, setIsImageModalOpen } = useStore(CommonStore);
  const isError = useMemo(() => {
    return false;
  }, []);

  return (
    <>
      {!isError && <Header />}
      <ContentBox $noHeader={isError}>{children}</ContentBox>
      <Can do={CrudAbility.READ} on={Abilities.HELP}>
        <HelpSection />
      </Can>

      <EditImageModal open={isImageModalOpen} onClose={() => setIsImageModalOpen(false)} />
      <SignForm open={isSignModalOpen} onClose={() => setIsSignModalOpen(false)} />
    </>
  );
};

export default Layout;
