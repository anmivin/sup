import { QueryInterface, DataTypes } from 'sequelize';
const defaultAtrributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  key: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING,
  },
  ru_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  en_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

const atrributesWithPart = {
  ...defaultAtrributes,
  part: {
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
};

const atrributesWithDescription = {
  ...atrributesWithPart,
  ru_description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  en_description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('base', defaultAtrributes);
    await queryInterface.createTable('tree', defaultAtrributes);
    await queryInterface.createTable('other', atrributesWithPart);
    await queryInterface.createTable('achievements', atrributesWithDescription);
    await queryInterface.createTable('aspiration_groups', atrributesWithPart);
    await queryInterface.createTable('aspirations', atrributesWithDescription);
    await queryInterface.createTable('aspiration_steps', {
      ...atrributesWithDescription,
      aspiration_key: {
        allowNull: false,
        type: DataTypes.STRING,
        references: { model: 'aspirations', key: 'key' },
      },
    });
    await queryInterface.createTable('skills', atrributesWithDescription);
    await queryInterface.createTable('trait_groups', atrributesWithPart);
    await queryInterface.createTable('traits', atrributesWithDescription);
    await queryInterface.createTable('collections', atrributesWithDescription);
    await queryInterface.createTable('collection_items', {
      ...atrributesWithDescription,
      collection_key: {
        allowNull: false,
        type: DataTypes.STRING,
        references: { model: 'collections', key: 'key' },
      },
    });
    await queryInterface.createTable('expansions', atrributesWithDescription);
    await queryInterface.createTable('deaths', atrributesWithDescription);
    await queryInterface.createTable('fears', atrributesWithDescription);
    await queryInterface.createTable('careers', atrributesWithDescription);
    await queryInterface.createTable('career_roots', {
      ...atrributesWithDescription,
      career_key: {
        allowNull: false,
        type: DataTypes.STRING,
        references: { model: 'careers', key: 'key' },
      },
    });
    await queryInterface.createTable('worlds', atrributesWithDescription);
    await queryInterface.createTable('neighbourhoods', {
      ...atrributesWithDescription,
      world_key: {
        allowNull: false,
        type: DataTypes.STRING,
        references: { model: 'worlds', key: 'key' },
      },
    });
    await queryInterface.createTable('lots', {
      ...atrributesWithDescription,
      world_key: {
        type: DataTypes.STRING,
        references: { model: 'worlds', key: 'key' },
      },
      neighbourhood_key: {
        type: DataTypes.STRING,
        references: { model: 'neighbourhoods', key: 'key' },
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('lots');
    await queryInterface.dropTable('neighbourhoods');
    await queryInterface.dropTable('towns');
    await queryInterface.dropTable('fears');
    await queryInterface.dropTable('deaths');
    await queryInterface.dropTable('expansions');
    await queryInterface.dropTable('collection_items');
    await queryInterface.dropTable('collections');
    await queryInterface.dropTable('traits');
    await queryInterface.dropTable('trait_groups');
    await queryInterface.dropTable('skills');
    await queryInterface.dropTable('aspiration_steps');
    await queryInterface.dropTable('aspirations');
    await queryInterface.dropTable('aspiration_groups');
    await queryInterface.dropTable('achievements');
    await queryInterface.dropTable('other');
    await queryInterface.dropTable('tree');
    await queryInterface.dropTable('base');
  },
};
