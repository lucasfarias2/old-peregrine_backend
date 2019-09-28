const express = require('express');

const UsersController = express.Router();

UsersController.get('/', (req, res) => {
  res.send('users get');
});

UsersController.post('/', (req, res) => {
  res.send('users post');
});

module.exports = UsersController;
