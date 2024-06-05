import skills from '@backend-shared/database/skills.json';
import misc from '@backend-shared/database//misc.json';
import aspirationGroups from '@backend-shared/database/aspirationsGroups.json';
import traitsGroups from '@backend-shared/database/traitsGroups.json';
import basic from '@backend-shared/translations/base.json';
import achievements from '@backend-shared/database/achievements.json';
import aspirations from '@backend-shared/database/aspirations.json';
import traits from '@backend-shared/database/traits.json';
import treeRelated from '@backend-shared/translations/treeRelated.json';

import { QueryInterface, Sequelize } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, _sequelize: Sequelize) {
    await queryInterface.bulkInsert(
      'base',
      basic.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
      })),
    );

    await queryInterface.bulkInsert(
      'tree',
      treeRelated.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
      })),
    );

    await queryInterface.bulkInsert(
      'other',
      misc.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
        part: item.part,
      })),
    );

    await queryInterface.bulkInsert(
      'achievements',
      achievements.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
        ru_description: item.ru_description,
        en_description: item.en_description,
        part: ['sims_4'],
      })),
    );

    await queryInterface.bulkInsert(
      'aspiration_groups',
      aspirationGroups.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
        part: ['sims_4'],
      })),
    );

    await queryInterface.bulkInsert(
      'aspirations',
      aspirations.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
        ru_description: item.ru_description,
        en_description: item.en_description,
        part: ['sims_4'],
      })),
    );

    aspirations.map(async (item) => {
      item.steps.map(async (step) => {
        await queryInterface.insert(null, 'aspiration_steps', {
          key: `${item.key}_${step.key}`,
          aspiration_key: item.key,
          ru_name: step.ru_name,
          en_name: step.en_name,
          ru_description: step.ru_description,
          en_description: step.en_description,
          part: ['sims_4'],
        });
      });
    });

    await queryInterface.bulkInsert(
      'skills',
      skills.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
        ru_description: item.ru_description,
        en_description: item.en_description,
        part: ['sims_4'],
      })),
    );

    await queryInterface.bulkInsert(
      'trait_groups',
      traitsGroups.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
        part: ['sims_4'],
      })),
    );

    await queryInterface.bulkInsert(
      'traits',
      traits.map((item) => ({
        key: item.key,
        ru_name: item.ru_name,
        en_name: item.en_name,
        ru_description: item.ru_description,
        en_description: item.en_description,
        part: ['sims_4'],
      })),
    );
  },

  async down(queryInterface: QueryInterface, _sequelize: Sequelize) {
    await queryInterface.bulkDelete('traits', {});
    await queryInterface.bulkDelete('trait_groups', {});
    await queryInterface.bulkDelete('skills', {});
    await queryInterface.bulkDelete('aspiration_steps', {});
    await queryInterface.bulkDelete('aspirations', {});
    await queryInterface.bulkDelete('aspiration_groups', {});
    await queryInterface.bulkDelete('achievements', {});
    await queryInterface.bulkDelete('other', {});
    await queryInterface.bulkDelete('base', {});
  },
};
