import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('achievements', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      points: {
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('aspirations', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
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
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('careers', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      age: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      roots: {
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('collection_items', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      collection_key: {
        type: DataTypes.STRING,
        references: {
          model: 'collections',
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
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('educations', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
    });

    await queryInterface.createTable('educations', {
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
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
    });

    await queryInterface.createTable('skills', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      age: {
        type: DataTypes.STRING,
      },
      steps: {
        type: DataTypes.INTEGER,
      },
      part: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('traits', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      group: {
        type: DataTypes.STRING,
      },
      part: {
        type: DataTypes.STRING,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('traits');
    await queryInterface.dropTable('skills');
    await queryInterface.dropTable('lifestyles');
    await queryInterface.dropTable('educations');
    await queryInterface.dropTable('deaths');
    await queryInterface.dropTable('collection_items');
    await queryInterface.dropTable('collections');
    await queryInterface.dropTable('careers');
    await queryInterface.dropTable('aspirations');
    await queryInterface.dropTable('achievements');
  },
};
