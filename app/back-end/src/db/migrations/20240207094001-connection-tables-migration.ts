import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.createTable('user_pack', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      pack_key: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'packs',
          key: 'key',
        },
      },
    });

    await queryInterface.createTable('user_achievement', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      achievement_key: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'achievements_4',
          key: 'key',
        },
      },
    });

    await queryInterface.createTable('parent_child', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      parent_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      child_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      type: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('partner_partner', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      partner_first_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      partner_second_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      is_ex: {
        type: DataTypes.BOOLEAN,
      },
      type: {
        type: DataTypes.STRING,
      },
    });

    await queryInterface.createTable('sim_aspiration_4', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      aspiration_key: {
        type: DataTypes.STRING,
        references: {
          model: 'aspirations_4',
          key: 'key',
        },
      },
      aspiration_step: {
        type: DataTypes.INTEGER,
      },
    });

    await queryInterface.createTable('sim_trait_4', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      trait_key: {
        type: DataTypes.STRING,
        references: {
          model: 'traits_4',
          key: 'key',
        },
      },
    });

    await queryInterface.createTable('sim_career_4', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      career_key: {
        type: DataTypes.STRING,
        references: {
          model: 'careers_4',
          key: 'key',
        },
      },
      root: {
        type: DataTypes.STRING,
      },
      step: {
        type: DataTypes.INTEGER,
      },
    });
    await queryInterface.createTable('sim_collection_4', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      collection_key: {
        type: DataTypes.STRING,
        references: {
          model: 'collections_4',
          key: 'key',
        },
      },
    });
    await queryInterface.createTable('sim_skill_4', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      skill_key: {
        type: DataTypes.STRING,
        references: {
          model: 'skills_4',
          key: 'key',
        },
      },
      level: {
        type: DataTypes.INTEGER,
      },
    });
    await queryInterface.createTable('sim_death_4', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      deaths_key: {
        type: DataTypes.STRING,
        references: {
          model: 'deaths_4',
          key: 'key',
        },
      },
    });
    await queryInterface.createTable('sim_position', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'sims',
          key: 'id',
        },
      },
      x_pos: {
        type: DataTypes.INTEGER,
      },
      y_pos: {
        type: DataTypes.INTEGER,
      },
    });
  },

  async down(queryInterface: QueryInterface, sequelize: Sequelize) {
    await queryInterface.dropTable('sim_skill_4');
    await queryInterface.dropTable('sim_collection_4');
    await queryInterface.dropTable('sim_career_4');
    await queryInterface.dropTable('sim_trait_4');
    await queryInterface.dropTable('sim_aspiration_4');
    await queryInterface.dropTable('partner_partner');
    await queryInterface.dropTable('parent_child');
    await queryInterface.dropTable('user_achievement');
    await queryInterface.dropTable('user_pack');
  },
};
