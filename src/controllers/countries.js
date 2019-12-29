const express = require('express');
const { Country, DeletedCountry } = require('../db/models');

const CountriesController = express.Router();

CountriesController.get('/', async (req, res) => {
  try {
    const found = await Country.findAll({
      order: [['id', 'ASC']],
    });
    res.send(found);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CountriesController.post('/', async (req, res) => {
  try {
    const created = await Country.create({
      id: req.body.id,
      name: req.body.name,
      locale: req.body.locale,
      currency_id: req.body.currency_id,
      disabled: req.body.disabled,
    });
    res.send(created);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CountriesController.get('/:id', async (req, res) => {
  try {
    const found = await Country.findByPk(req.params.id);
    res.send(found);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CountriesController.put('/:id', async (req, res) => {
  try {
    const found = await Country.findByPk(req.params.id);
    if (found)
      await found.update({
        name: req.body.name,
        code: req.body.code,
        locale: req.body.locale,
        currency_id: req.body.currency_id,
        disabled: req.body.disabled,
      });
    res.send(`Country ${found.name} successfully edited.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

CountriesController.delete('/:id', async (req, res) => {
  try {
    const found = await Country.findByPk(req.params.id);
    if (found) await found.destroy();
    DeletedCountry.create({ ...found.dataValues });
    res.send(`Country ${found.name} successfully deleted.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = CountriesController;
