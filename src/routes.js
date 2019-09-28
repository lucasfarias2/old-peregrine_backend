const express = require('express');
const UsersController = require('./controllers/users');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('You can query USERS');
});

Router.use('/users', UsersController);

module.exports = Router;
