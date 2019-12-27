const express = require('express');
const Category = require('../db/models/category');

const CategoriesController = express.Router();

CategoriesController.get('/', async (req, res) => {
  try {
    const users = await Category.findAll();
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

CategoriesController.post('/', async (req, res) => {
  try {
    const created = await Category.create({
      name: req.body.name,
      disabled: req.body.disabled || false,
    });
    res.send(created);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

CategoriesController.get('/remove/:id', async (req, res) => {
  try {
    const found = await Category.findByPk(req.params.id);
    if (found) found.update({ disabled: true });
    res.send(`Category ${found.name} successfully disabled.`);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

module.exports = CategoriesController;
