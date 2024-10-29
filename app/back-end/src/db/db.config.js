require('ts-node/register');

const DB_CONFIG = {
  username: 'postgres',
  password: '1234',
  database: 'sup',
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  migrationStorageTableName: '_migrations_',
  define: {
    schema: 'public',
    underscored: true,
  },
  seederStorageTableName: '_seeders_',
  seederStorage: 'sequelize',
};

module.exports = {
  development: DB_CONFIG,
  production: DB_CONFIG,
};
