import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('achievements_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
      points: {
        type: DataTypes.INTEGER,
      },
    });
    await queryInterface.createTable('aspirations_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
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
    });
    await queryInterface.createTable('careers_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      roots: {
        type: DataTypes.INTEGER,
      },
      pack_key: {
        type: DataTypes.STRING,
        references: {
          model: 'packs',
          key: 'key',
        },
      },
    });

    await queryInterface.createTable('collections_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      count: {
        type: DataTypes.INTEGER,
      },
    });
    await queryInterface.createTable('collection_items_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
      collection_key: {
        type: DataTypes.STRING,
        references: {
          model: 'collections_4',
          key: 'key',
        },
      },
      pack_key: {
        type: DataTypes.STRING,
        references: {
          model: 'packs',
          key: 'key',
        },
      },
      rarity: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('deaths_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      pack_key: {
        type: DataTypes.STRING,
        references: {
          model: 'packs',
          key: 'key',
        },
      },
    });

    await queryInterface.createTable('fears_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('lifestyles_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('skills_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.STRING,
      },
      steps: {
        type: DataTypes.INTEGER,
      },
    });

    await queryInterface.createTable('traits_4', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
      group: {
        type: DataTypes.STRING,
      },
    });
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('deaths_4');
    await queryInterface.dropTable('skills_4');
    await queryInterface.dropTable('lifestyles_4');
    await queryInterface.dropTable('fears_4');
    await queryInterface.dropTable('collection_items_4');
    await queryInterface.dropTable('aspirations_4');
    await queryInterface.dropTable('traits_4');
    await queryInterface.dropTable('collections_4');
    await queryInterface.dropTable('careers_4');
    await queryInterface.dropTable('aspirations_4');
    await queryInterface.dropTable('achievements_4');
  },
};
