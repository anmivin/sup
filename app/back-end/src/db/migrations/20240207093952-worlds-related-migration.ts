import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('worlds', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      part: {
        type: DataTypes.STRING,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      filled_map_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      empty_map_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
    });
    await queryInterface.createTable('neighborhoods', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      part: {
        type: DataTypes.STRING,
      },
      icon_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
      icon_color: {
        type: DataTypes.STRING,
      },
      world_key: {
        type: DataTypes.STRING,
        references: {
          model: 'worlds',
          key: 'key',
        },
      },
    });
    await queryInterface.createTable('lots', {
      key: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      part: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.INTEGER,
      },
      width: {
        type: DataTypes.INTEGER,
      },
      world_key: {
        type: DataTypes.STRING,
        references: {
          model: 'worlds',
          key: 'key',
        },
      },
      neighborhood_key: {
        type: DataTypes.STRING,
        references: {
          model: 'neighborhoods',
          key: 'key',
        },
      },
      svg_path: {
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
      image_id: {
        type: DataTypes.STRING,
        references: {
          model: 'files',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('buildings');
    await queryInterface.dropTable('lots');
    await queryInterface.dropTable('neighborhoods');
    await queryInterface.dropTable('worlds');
  },
};
