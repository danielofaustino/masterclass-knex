const express = require('express');

const morgan = require('morgan');

const app = express();

const knex = require('./database');

app.use(morgan('dev'))

const routes = require('./routes');

app.use(express.json());

app.use(routes);

//not found

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

module.exports = app;
