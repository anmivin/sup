import { components } from '@api/Api';

export const randomSet = (arrayLength: number, count: number) => {
  const rand: string[] = [];
  const set: Set<number> = new Set();

  while (set.size < count) {
    set.add(Math.floor(Math.random() * arrayLength));
  }

  return set;
};

export const getRandomAspiration = (
  aspirations: components['schemas']['OutputAspirationList4Dto'][],
  count: number,
  age: 'child' | 'teen' | 'adult',
) => {
  const filtredByAgeAspirations = aspirations.filter((aspiration) => {
    switch (age) {
      case 'child': {
        return aspiration.group;
      }
      case 'teen': {
        return aspiration.group;
      }
      default: {
        return aspiration.group;
      }
    }
  });
};

export const getRandomCareer = (
  careers: components['schemas']['OutputCareerList4Dto'][],
  count: number,
  withRoot: boolean,
  age: 'teen' | 'adult',
) => {
  const filtredByAgeAspirations = careers.filter((career) => {
    switch (age) {
      case 'teen': {
        return career.age;
      }
      default: {
        return career.age;
      }
    }
  });
};

export const getRandomCollection = (
  collections: components['schemas']['OutputCollectionList4Dto'][],
  count: number,
) => {};

export const getRandomSkill = (
  skills: components['schemas']['OutputSkillList4Dto'][],
  count: number,
  age: 'toddler' | 'child' | 'adult',
) => {
  const filtredByAgeSkills = skills.filter((skill) => {
    switch (age) {
      case 'toddler': {
        return ['toddler'].includes(skill.age);
      }
      case 'child': {
        return ['child'].includes(skill.age);
      }
      default: {
        return ['adult'].includes(skill.age);
      }
    }
  });
  const rand: components['schemas']['OutputSkillList4Dto'][] = [];
  const set = randomSet(filtredByAgeSkills.length, count);
  set.forEach((num) => rand.push(filtredByAgeSkills[num]));
  return rand;
};

export const getRandomTrait = (
  traits: components['schemas']['OutputTraitList4Dto'][],
  count: number,
  age: 'infant' | 'toddler' | 'adult',
) => {
  const filtredByAgeAspirations = traits.filter((trait) => {
    switch (age) {
      case 'infant': {
        return ['trait_group_006_infant'].includes(trait.group);
      }
      case 'toddler': {
        return ['trait_group_005_toddler'].includes(trait.group);
      }
      default: {
        return [
          'trait_group_001_emotional',
          'trait_group_002_hobby',
          'trait_group_003_lifestyle',
          'trait_group_004_social',
        ].includes(trait.group);
      }
    }
  });
  const rand: components['schemas']['OutputTraitList4Dto'][] = [];
  const set = randomSet(filtredByAgeAspirations.length, count);
  set.forEach((num) => rand.push(filtredByAgeAspirations[num]));
};
