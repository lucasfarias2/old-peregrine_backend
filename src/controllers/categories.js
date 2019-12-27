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
    });
    res.send(created);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

CategoriesController.delete('/:id', async (req, res) => {
  try {
    const found = await Category.findByPk(req.params.id);
    if (found) found.destroy();
    res.send(`Category ${found.name} successfully deleted.`);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

module.exports = CategoriesController;
