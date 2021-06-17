const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get('/users', UserController.getUsers);
routes.post('/users', UserController.createUser);
routes.put('/users/:id', UserController.updateUser);
routes.delete('/users/:id', UserController.deleteUser);

module.exports = routes;
