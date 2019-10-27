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
      access: req.body.access || 'user',
    });
    res.send(created);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

UsersController.post('/auth', async (req, res) => {
  try {
    const userToken = req.headers['X-User-Token'];
    const userUid = req.headers['X-User-uid'];

    // find user in our db by uuid
    // not found? so create it
    // found? return OK

    if (userToken && userUid) {
      res.send('received: ', userToken, userUid);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = UsersController;
