import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('achievements', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_path: {
        type: DataTypes.STRING,
      },
      points: {
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.ENUM('sims_3', 'sims_4'),
      },
    });
    await queryInterface.createTable('aspirations', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_path: {
        type: DataTypes.STRING,
      },
      steps: {
        type: DataTypes.INTEGER,
      },
      group: {
        type: DataTypes.STRING,
      },
      bonus: {
        type: DataTypes.STRING,
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
    });
    await queryInterface.createTable('careers', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_path: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      roots: {
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
    });

    await queryInterface.createTable('collections', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      count: {
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.ENUM('sims_2', 'sims_3', 'sims_4'),
      },
    });
    await queryInterface.createTable('collection_items', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_path: {
        type: DataTypes.STRING,
      },
      collection_key: {
        type: DataTypes.STRING,
        references: {
          model: 'collections_4',
          key: 'key',
        },
      },
      rarity: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('deaths', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
    });

    await queryInterface.createTable('lifestyles', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_path: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('skills', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_path: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.STRING,
      },
      steps: {
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
    });

    await queryInterface.createTable('traits', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_path: {
        type: DataTypes.STRING,
      },
      group: {
        type: DataTypes.STRING,
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
    });
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('deaths');
    await queryInterface.dropTable('skills');
    await queryInterface.dropTable('lifestyles');
    await queryInterface.dropTable('collection_items');
    await queryInterface.dropTable('aspirations');
    await queryInterface.dropTable('traits');
    await queryInterface.dropTable('collections');
    await queryInterface.dropTable('careers');
    await queryInterface.dropTable('aspirations');
    await queryInterface.dropTable('achievements');
  },
};
