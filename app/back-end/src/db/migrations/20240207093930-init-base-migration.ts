import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.ENUM('local', 'google'),
      },
      image_path: {
        type: DataTypes.STRING,
      },
      image_path_tn: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('trees', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      name: {
        type: DataTypes.STRING,
      },
      image_path: {
        type: DataTypes.STRING,
      },
      image_path_tn: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('sims', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      name: {
        type: DataTypes.STRING,
      },
      image_path: {
        type: DataTypes.STRING,
      },
      image_path_tn: {
        type: DataTypes.STRING,
      },
      is_in_tree: {
        type: DataTypes.BOOLEAN,
      },
      tree_id: {
        type: DataTypes.STRING,
        references: {
          model: 'trees',
          key: 'id',
        },
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
    });
    await queryInterface.createTable('packs', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      icon: {
        type: DataTypes.STRING,
      },
      part: {
        type: DataTypes.ENUM('sims_1', 'sims_2', 'sims_3', 'sims_4'),
      },
      type: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('buildings', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      lot_id: {
        type: DataTypes.STRING,
        references: {
          model: 'lots',
          key: 'id',
        },
      },
      image_path: {
        type: DataTypes.STRING,
      },
      image_path_tn: {
        type: DataTypes.STRING,
      },
    })
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('buildings');
    await queryInterface.dropTable('packs');
    await queryInterface.dropTable('sims');
    await queryInterface.dropTable('trees');
    await queryInterface.dropTable('avatars');
    await queryInterface.dropTable('users');
  },
};
