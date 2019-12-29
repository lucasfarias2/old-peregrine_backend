const express = require('express');
const { Category, DeletedCategory } = require('../db/models');

const CategoriesController = express.Router();

CategoriesController.get('/', async (req, res) => {
  try {
    const found = await Category.findAll({
      order: [['id', 'ASC']],
    });
    res.send(found);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CategoriesController.post('/', async (req, res) => {
  try {
    const created = await Category.create({
      name: req.body.name,
      disabled: req.body.disabled,
    });
    res.send(created);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CategoriesController.get('/:id', async (req, res) => {
  try {
    const found = await Category.findByPk(req.params.id);
    res.send(found);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CategoriesController.put('/:id', async (req, res) => {
  try {
    const found = await Category.findByPk(req.params.id);
    if (found)
      await found.update({
        name: req.body.name,
        disabled: req.body.disabled,
      });
    res.send(`Category ${found.name} successfully edited.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CategoriesController.delete('/:id', async (req, res) => {
  try {
    const found = await Category.findByPk(req.params.id);
    if (found) await found.destroy();
    DeletedCategory.create({ ...found.dataValues });
    res.send(`Category ${found.name} successfully deleted.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = CategoriesController;
