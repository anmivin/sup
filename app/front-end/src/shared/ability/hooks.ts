import { useContext } from 'react';

import { AbilityContext } from './Ability';

export function useCan() {
  return useContext(AbilityContext);
}
