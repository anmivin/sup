import { FC, ReactNode, useMemo } from 'react';

import { useStore } from 'zustand';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { AbilityContext, defineAbilities } from './Ability';

const AbilityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { role } = useStore(ProfileStore);

  const abilityProfile = useMemo(() => {
    return defineAbilities(role);
  }, [role]);

  return <AbilityContext.Provider value={abilityProfile}>{children}</AbilityContext.Provider>;
};

export default AbilityProvider;
