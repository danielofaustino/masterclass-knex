const { NText } = require('mssql');
const knex = require('../database');

module.exports = {
  async getUsers(req, res) {
    const results = await knex('users');

    return res.json(results);
  },

  async createUser(req, res, next) {
    try {
      const { username } = req.body;

      await knex('users').insert({
        username,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },

  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { username } = req.body;
      await knex('users').update({ username }).where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },

  async deleteUser(req, res, next) {
    try {
      const { id } = req.params;

      await knex('users').where({ id }).del();

      return res.send();
      
    } catch (error) {
      next(error);
    }
  },
};
