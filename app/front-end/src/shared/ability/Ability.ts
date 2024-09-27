import { createContext } from 'react';

import { Ability, AbilityBuilder, AbilityClass, AbilityTuple, MatchConditions, PureAbility } from '@casl/ability';
import { createContextualCan } from '@casl/react';

enum USER_ROLES {
  loggedOut = 'loggedOut',
  simpleUser = 'simpleUser',
  uberUser = 'uberUser',
}

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
  BUILDING = 'BUILDING',
}

export enum CrudAbility {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export const ability = new PureAbility<AbilityTuple<CrudAbility, Abilities> | CrudAbility, MatchConditions>();
type AppAbilityType = PureAbility<AbilityTuple<CrudAbility, Abilities>, MatchConditions>;
const conditionsMatcher = (matchConditions: MatchConditions) => matchConditions;

export const AppAbility = Ability as AbilityClass<AppAbilityType>;

export function createAbility({ userInfo }: { userInfo: any | null }): AppAbilityType {
  const { can, build } = new AbilityBuilder(AppAbility);

  if (!userInfo) {
    can(CrudAbility.READ, Abilities.LOGIN);
    can(CrudAbility.READ, Abilities.CHALLANGES);
    can(CrudAbility.READ, Abilities.WORLDS);
  } else {
    if (userInfo.roles === USER_ROLES.simpleUser) {
      can(CrudAbility.READ, Abilities.LOGOUT);

      can(CrudAbility.READ, Abilities.PROFILE);
      can(CrudAbility.UPDATE, Abilities.PROFILE);

      can(CrudAbility.READ, Abilities.SETTINGS);
      can(CrudAbility.UPDATE, Abilities.SETTINGS);

      can(CrudAbility.READ, Abilities.TRACKER);
      can(CrudAbility.UPDATE, Abilities.TRACKER);

      can(CrudAbility.READ, Abilities.TREES);

      can(CrudAbility.READ, Abilities.CHALLANGES);

      can(CrudAbility.READ, Abilities.WORLDS);

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
  }

  return build({
    conditionsMatcher,
  });
}

export const AbilityContext = createContext<AppAbilityType>(createAbility({ userInfo: null }));
export const Can = createContextualCan(AbilityContext.Consumer);
