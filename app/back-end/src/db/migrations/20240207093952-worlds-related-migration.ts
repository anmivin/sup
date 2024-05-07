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
      icon: {
        type: DataTypes.STRING,
      },
      filled_map: {
        type: DataTypes.STRING,
      },
      empty_map: {
        type: DataTypes.STRING,
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
      icon: {
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
      filled_image: {
        type: DataTypes.STRING,
      },
      empty_image: {
        type: DataTypes.STRING,
      },
      price_filled: {
        type: DataTypes.INTEGER,
      },
      price_empty: {
        type: DataTypes.INTEGER,
      },
      size: {
        type: DataTypes.STRING,
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
    });
    await queryInterface.createTable('coordinates', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      lot_key: {
        type: DataTypes.STRING,
        references: {
          model: 'lots',
          key: 'key',
        },
      },
      top_left_x: {
        type: DataTypes.INTEGER,
      },
      top_left_y: {
        type: DataTypes.INTEGER,
      },
      top_right_x: {
        type: DataTypes.INTEGER,
      },
      top_right_y: {
        type: DataTypes.INTEGER,
      },
      bottom_right_x: {
        type: DataTypes.INTEGER,
      },
      bottom_right_y: {
        type: DataTypes.INTEGER,
      },
      bottom_left_x: {
        type: DataTypes.INTEGER,
      },
      bottom_left_y: {
        type: DataTypes.INTEGER,
      },
    });
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('coordinates');
    await queryInterface.dropTable('lots');
    await queryInterface.dropTable('neighborhoods');
    await queryInterface.dropTable('worlds');
  },
};
