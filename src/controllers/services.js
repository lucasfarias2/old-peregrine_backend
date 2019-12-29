const express = require('express');
const { Service, DeletedService } = require('../db/models');

const ServicesController = express.Router();

ServicesController.get('/', async (req, res) => {
  try {
    const found = await Service.findAll({
      order: [['id', 'ASC']],
    });
    res.send(found);
  } catch (e) {
    res.status(400).send(e);
  }
});

ServicesController.post('/', async (req, res) => {
  try {
    const created = await Service.create({
      name: req.body.name,
      category_id: req.body.category_id,
      disabled: req.body.disabled,
    });
    res.send(created);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

ServicesController.get('/:id', async (req, res) => {
  try {
    const found = await Service.findByPk(req.params.id);
    res.send(found);
  } catch (e) {
    res.status(400).send(e);
  }
});

ServicesController.put('/:id', async (req, res) => {
  try {
    const found = await Service.findByPk(req.params.id);
    if (found)
      await found.update({
        name: req.body.name,
        category_id: req.body.category_id,
        disabled: req.body.disabled,
      });
    res.send(`Service ${found.name} successfully edited.`);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

ServicesController.delete('/:id', async (req, res) => {
  try {
    const found = await Service.findByPk(req.params.id);
    if (found) await found.destroy();
    DeletedService.create({ ...found.dataValues });
    res.send(`Service ${found.name} successfully deleted.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.name);
  }
});

module.exports = ServicesController;
