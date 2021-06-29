const knexfile = require('./knexfile');
require('dotenv').config();
const knex = (process.env.ENVIRONMENT == 'development'
  ? require('knex')(knexfile.development)
  : require('knex')(knexfile.production));

module.exports = knex;
