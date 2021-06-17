const express = require('express');

const app = express();

const knex = require('./database');

const routes = require('./routes');

app.use(routes);

module.exports = app;
