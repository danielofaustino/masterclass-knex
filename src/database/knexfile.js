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
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    
  },
  production: {
    client: 'mssql',
    connection: {
      database: 'fastpro',
      host: '127.0.0.1',
      user: 'sa',
      password: 'fastpro21',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    
  },
};
