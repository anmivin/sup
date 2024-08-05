import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('default_sims', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      part: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('default_sims_in_tree', {
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
      default_sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
          key: 'id',
        },
      },
    });
    await queryInterface.createTable('deafult_parent_child', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      parent_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
          key: 'id',
        },
      },
      child_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
          key: 'id',
        },
      },
      type: {
        type: DataTypes.STRING,
      },
    });
    await queryInterface.createTable('default_partner_partner', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      partner_first_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
          key: 'id',
        },
      },
      partner_second_id: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
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

    await queryInterface.createTable('default_sim_aspiration', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
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

    await queryInterface.createTable('default_sim_trait', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
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

    await queryInterface.createTable('default_sim_career', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
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
    await queryInterface.createTable('default_sim_skill', {
      id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
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
    await queryInterface.createTable('default_sim_death', {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      sim_id: {
        type: DataTypes.STRING,
        references: {
          model: 'default_sims',
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
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('default_sim_death');
    await queryInterface.dropTable('default_sim_skill');
    await queryInterface.dropTable('default_sim_career');
    await queryInterface.dropTable('default_sim_trait');
    await queryInterface.dropTable('default_sim_aspiration');
    await queryInterface.dropTable('default_partner_partner');
    await queryInterface.dropTable('deafult_parent_child');
    await queryInterface.dropTable('default_sims_in_tree');
    await queryInterface.dropTable('default_sims');
  },
};
