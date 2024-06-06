import achievements from '@backend-shared/database/achievements.json';
import aspirations from '@backend-shared/database/aspirations.json';
import careers from '@backend-shared/database/careers.json';
import packs from '@backend-shared/database/packs.json';
import skills from '@backend-shared/database/skills.json';
import traits from '@backend-shared/database/traits.json';
import { QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    await queryInterface.bulkInsert(
      'achievements',
      achievements.map((achievement) => ({
        key: achievement.key,
        icon: achievement.icon,
        points: achievement.points,
      })),
    );
    await queryInterface.bulkInsert(
      'aspirations',
      aspirations.map((aspiration) => ({
        key: aspiration.key,
        icon: aspiration.icon,
        steps: aspiration.steps.length,
        group: aspiration.group,
        bonus: aspiration.bonus,
      })),
    );
    await queryInterface.bulkInsert(
      'skills',
      skills.map((skill) => ({
        key: skill.key,
        icon: skill.icon,
        age: skill.age,
        steps: skill.steps,
      })),
    );
    await queryInterface.bulkInsert(
      'traits',
      traits.map((trait) => ({
        key: trait.key,
        icon: trait.icon,
        group: trait.group,
      })),
    );
    await queryInterface.bulkInsert(
      'packs',
      packs.map((pack) => ({
        key: pack.key,
        icon: pack.icon,
        part: 'sims_4',
        type: pack.type,
      })),
    );
    await queryInterface.bulkInsert(
      'careers',
      careers.map((career) => ({
        key: career.key,
        icon: career.icon,
        age: career.age,
        roots: career.roots.length,
        pack_key: career.pack_key,
      })),
    );
  },
  down: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    await queryInterface.bulkDelete('packs', {});
    await queryInterface.bulkDelete('skills', {});
    await queryInterface.bulkDelete('traits', {});
    await queryInterface.bulkDelete('aspirations', {});
    await queryInterface.bulkDelete('achievements', {});
  },
};
