import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
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
          model: 'achievements',
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

    await queryInterface.createTable('sim_aspiration', {
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
          model: 'aspirations',
          key: 'key',
        },
      },
      aspiration_step: {
        type: DataTypes.INTEGER,
      },
    });

    await queryInterface.createTable('sim_trait', {
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
          model: 'traits',
          key: 'key',
        },
      },
    });

    await queryInterface.createTable('sim_career', {
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
          model: 'careers',
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

    await queryInterface.createTable('sim_collection', {
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
          model: 'collections',
          key: 'key',
        },
      },
    });
    await queryInterface.createTable('sim_skill', {
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
          model: 'skills',
          key: 'key',
        },
      },
      level: {
        type: DataTypes.INTEGER,
      },
    });
    await queryInterface.createTable('sim_death', {
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
          model: 'deaths',
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
      x_Pos: {
        type: DataTypes.INTEGER,
      },
      y_Pos: {
        type: DataTypes.INTEGER,
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('sim_position');
    await queryInterface.dropTable('sim_death');
    await queryInterface.dropTable('sim_skill');
    await queryInterface.dropTable('sim_collection');
    await queryInterface.dropTable('sim_career');
    await queryInterface.dropTable('sim_trait');
    await queryInterface.dropTable('sim_aspiration');
    await queryInterface.dropTable('partner_partner');
    await queryInterface.dropTable('parent_child');
    await queryInterface.dropTable('user_achievement');
  },
};
