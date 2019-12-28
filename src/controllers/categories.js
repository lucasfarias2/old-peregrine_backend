const express = require('express');
const { Category, DeletedCategory } = require('../db/models');

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

CategoriesController.delete('/:id', async (req, res) => {
  try {
    const found = await Category.findByPk(req.params.id);
    if (found) await found.destroy();
    DeletedCategory.create(found);
    res.send(`Category ${found.name} successfully deleted.`);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

module.exports = CategoriesController;
