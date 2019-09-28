const express = require('express');
const User = require('../db/models/user');

const UsersController = express.Router();

UsersController.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

UsersController.post('/', async (req, res) => {
  try {
    const created = await User.create({
      uid: req.body.uid,
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      access: req.body.access,
    });
    res.send(created);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = UsersController;
