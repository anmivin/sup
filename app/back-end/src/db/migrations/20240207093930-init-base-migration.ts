import { QueryInterface, DataTypes } from 'sequelize';
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('files', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      path: {
        type: DataTypes.STRING,
      },
      path_tn: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
    });
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
      image_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
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
      image_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
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
      image_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
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
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('sims');
    await queryInterface.dropTable('trees');
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('files');
  },
};
