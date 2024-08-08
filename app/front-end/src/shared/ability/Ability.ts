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

  SAVE_SIM = 'SAVE_SIM',
  SAVE_TREE = 'SAVE_TREE',
}

export enum CrudAbility {
  CREATE = 'CREATE',
  READ = 'READ',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

type EmployeeNameType = { employeeName: string | null };
type Subjects = Abilities | EmployeeNameType;

export const ability = new PureAbility<AbilityTuple<CrudAbility, Subjects> | CrudAbility, MatchConditions>();
type AppAbilityType = PureAbility<AbilityTuple<CrudAbility, Subjects>, MatchConditions>;
const conditionsMatcher = (matchConditions: MatchConditions) => matchConditions;

export const AppAbility = Ability as AbilityClass<AppAbilityType>;

export function createAbility({ userInfo }: { userInfo: any | null }): AppAbilityType {
  const { can, build } = new AbilityBuilder(AppAbility);
  if (!userInfo) {
    can(CrudAbility.READ, Abilities.LOGIN);
  } else {
    if (userInfo.roles === USER_ROLES.simpleUser) {
    }
  }

  return build({
    conditionsMatcher,
  });
}

export const AbilityContext = createContext<AppAbilityType>(createAbility({ userInfo: null }));
export const Can = createContextualCan(AbilityContext.Consumer);
