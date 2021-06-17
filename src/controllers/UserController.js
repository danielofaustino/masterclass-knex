const { NText } = require('mssql');
const knex = require('../database');

module.exports = {


  async getUsers(req, res) {
    const results = await knex('users');

    return res.json(results);
  },
  

  async createUser(req, res) {
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
};
