const express = require('express');
const firebaseAdmin = require('firebase-admin');
const { User, DeletedUser } = require('../db/models');

const UsersController = express.Router();

UsersController.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ order: [['createdAt', 'ASC']] });
    res.send(users);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

UsersController.post('/', async (req, res) => {
  try {
    const createdOnFirebase = await firebaseAdmin.auth().createUser({
      email: req.body.email,
      emailVerified: true,
      phoneNumber: req.body.phone,
      password: req.body.password,
      displayName: req.body.name,
      disabled: req.body.disabled,
    });

    if (createdOnFirebase) {
      const created = await User.create({
        uid: createdOnFirebase.uid,
        email: createdOnFirebase.email,
        email_verified: createdOnFirebase.emailVerified,
        name: createdOnFirebase.displayName,
        phone: createdOnFirebase.phoneNumber,
        disabled: createdOnFirebase.disabled,
        access: req.body.access,
        country_id: req.body.country_id,
      });

      res.send(created);
    }
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

UsersController.get('/:id', async (req, res) => {
  try {
    const found = await User.findByPk(req.params.id);
    res.send(found);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

UsersController.put('/:id', async (req, res) => {
  try {
    const found = await User.findByPk(req.params.id);

    if (found) {
      const data = {
        email: req.body.email,
        phoneNumber: req.body.phone,
        displayName: req.body.name,
        disabled: req.body.disabled,
      };

      if (req.body.password) data.password = req.body.password;

      const updatedUser = await firebaseAdmin
        .auth()
        .updateUser(req.params.id, data);

      await found.update({
        email: updatedUser.email,
        name: updatedUser.displayName,
        phone: updatedUser.phoneNumber,
        disabled: updatedUser.disabled,
        access: req.body.access,
        country_id: req.body.country_id,
      });
    }
    res.send(`User ${found.name} successfully edited.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

UsersController.delete('/:id', async (req, res) => {
  try {
    const found = await User.findByPk(req.params.id);

    if (found) {
      await firebaseAdmin.auth().deleteUser(req.params.id);

      await found.destroy();
    }

    DeletedUser.create({ ...found.dataValues });
    res.send(`User ${found.name} successfully deleted.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = UsersController;
