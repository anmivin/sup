import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
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
    });
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('packs');
  },
};
