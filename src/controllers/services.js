const express = require('express');
const { Service } = require('../db/models');

const ServicesController = express.Router();

ServicesController.get('/', async (req, res) => {
  try {
    const users = await Service.findAll();
    res.send(users);
  } catch (e) {
    res.status(400).send(e);
  }
});

ServicesController.post('/', async (req, res) => {
  try {
    const created = await Service.create({
      name: req.body.name,
      category_id: req.body.category_id,
    });
    res.send(created);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

module.exports = ServicesController;
