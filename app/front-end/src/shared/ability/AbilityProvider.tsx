import { FC, ReactNode, useEffect, useMemo } from 'react';

import { useStore } from 'zustand';

import { ProfileStore } from '@stores/Profile/Profile.store';

import { AbilityContext, createAbility } from './Ability';

const AbilityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { role } = useStore(ProfileStore);
  useEffect(() => console.log('role', role), [role]);
  const abilityProfile = useMemo(() => {
    return createAbility({ userInfo: role });
  }, [role]);

  return <AbilityContext.Provider value={abilityProfile}>{children}</AbilityContext.Provider>;
};

export default AbilityProvider;
