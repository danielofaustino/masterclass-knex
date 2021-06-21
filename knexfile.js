// Update with your config settings.

module.exports = {
  development: {
    client: 'mssql',
    connection: {
      database: 'fastpro',
      host: '127.0.0.1',
      user: 'sa',
      password: 'fastpro21',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
