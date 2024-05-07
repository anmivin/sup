import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
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

    await queryInterface.createTable('default_sim_aspiration_4', {
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
          model: 'aspirations_4',
          key: 'key',
        },
      },
      aspiration_step: {
        type: DataTypes.INTEGER,
      },
    });

    await queryInterface.createTable('default_sim_trait_4', {
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
          model: 'traits_4',
          key: 'key',
        },
      },
    });

    await queryInterface.createTable('default_sim_career_4', {
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
    await queryInterface.createTable('default_sim_skill_4', {
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
          model: 'skills_4',
          key: 'key',
        },
      },
      level: {
        type: DataTypes.INTEGER,
      },
    });
    await queryInterface.createTable('default_sim_death_4', {
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
          model: 'deaths_4',
          key: 'key',
        },
      },
    });
  },
  down: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {},
};
