import { createContext } from 'react';

import { Ability, AbilityBuilder } from '@casl/ability';
import { createContextualCan } from '@casl/react';

import { USER_ROLES } from '@type/enums';

export enum Abilities {
  CHALLANGES = 'CHALLANGES',
  PROFILE = 'PROFILE',
  SETTINGS = 'SETTINGS',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  TRACKER = 'TRACKER',
  TREES = 'TREES',
  WORLDS = 'WORLDS',
  SIM = 'SIM',
  TREE = 'TREE',
  WORLD = 'WORLD',
  BUILDING = 'BUILDING',
  RANDOMIZER = 'RANDOMIZER',
  HELP = 'HELP',
}

export enum CrudAbility {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export const defineAbilities = (role: USER_ROLES | null) => {
  const { can, build } = new AbilityBuilder(Ability);

  if (!role) {
    can(CrudAbility.READ, Abilities.LOGIN);
    can(CrudAbility.READ, Abilities.CHALLANGES);
    can(CrudAbility.READ, Abilities.WORLDS);
  } else {
    if ([USER_ROLES.simpleUser, USER_ROLES.uberUser].includes(role)) {
      can(CrudAbility.READ, Abilities.LOGOUT);

      can(CrudAbility.READ, Abilities.PROFILE);
      can(CrudAbility.UPDATE, Abilities.PROFILE);

      can(CrudAbility.READ, Abilities.SETTINGS);
      can(CrudAbility.UPDATE, Abilities.SETTINGS);

      can(CrudAbility.READ, Abilities.TRACKER);
      can(CrudAbility.UPDATE, Abilities.TRACKER);

      can(CrudAbility.READ, Abilities.TREES);

      can(CrudAbility.READ, Abilities.CHALLANGES);

      can(CrudAbility.READ, Abilities.RANDOMIZER);

      can(CrudAbility.READ, Abilities.WORLDS);
      can(CrudAbility.READ, Abilities.WORLD);

      can(CrudAbility.CREATE, Abilities.BUILDING);
      can(CrudAbility.READ, Abilities.BUILDING);
      can(CrudAbility.UPDATE, Abilities.BUILDING);
      can(CrudAbility.DELETE, Abilities.BUILDING);

      can(CrudAbility.CREATE, Abilities.TREE);
      can(CrudAbility.READ, Abilities.TREE);
      can(CrudAbility.UPDATE, Abilities.TREE);
      can(CrudAbility.DELETE, Abilities.TREE);

      can(CrudAbility.CREATE, Abilities.SIM);
      can(CrudAbility.READ, Abilities.SIM);
      can(CrudAbility.UPDATE, Abilities.SIM);
      can(CrudAbility.DELETE, Abilities.SIM);
    }

    if (role === USER_ROLES.uberUser) {
      can(CrudAbility.READ, Abilities.HELP);
    }
  }

  return build();
};

export const AbilityContext = createContext(defineAbilities(null));
export const Can = createContextualCan(AbilityContext.Consumer);
