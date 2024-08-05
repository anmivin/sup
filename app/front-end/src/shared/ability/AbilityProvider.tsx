import { FC, ReactNode, useMemo } from 'react';

import { useStore } from 'effector-react';

import { AuthSuccessModel } from 'entities/auth/AuthSuccess/AuthSuccess.model';

import { AbilityContext, createAbility } from './Ability';

const {
  outputs: { $profile },
} = AuthSuccessModel;

const AbilityProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const profile = useStore($profile);

  const abilityProfile = useMemo(() => {
    return createAbility({ userInfo: profile });
  }, [profile]);

  return <AbilityContext.Provider value={abilityProfile}>{children}</AbilityContext.Provider>;
};

export default AbilityProvider;
