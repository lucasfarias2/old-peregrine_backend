const express = require('express');
const { Order, DeletedOrder } = require('../db/models');

const OrdersController = express.Router();

OrdersController.get('/', async (req, res) => {
  try {
    const found = await Order.findAll({ order: [['id', 'ASC']] });
    res.send(found);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

OrdersController.post('/', async (req, res) => {
  try {
    const created = await Order.create({
      title: req.body.title,
      description: req.body.description,
      service_id: req.body.service_id,
      owner_id: req.body.owner_id,
      customer_id: req.body.customer_id,
      status: req.body.status,
    });
    res.send(created);
  } catch (e) {
    console.error(e);
    res.status(400).send(e.name);
  }
});

OrdersController.get('/:id', async (req, res) => {
  try {
    const found = await Order.findByPk(req.params.id);
    res.send(found);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

OrdersController.put('/:id', async (req, res) => {
  try {
    const found = await Order.findByPk(req.params.id);
    if (found)
      await found.update({
        title: req.body.title,
        description: req.body.description,
        service_id: req.body.service_id,
        owner_id: req.body.owner_id,
        customer_id: req.body.customer_id,
        status: req.body.status,
      });
    res.send(`Order ${found.name} successfully edited.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

OrdersController.delete('/:id', async (req, res) => {
  try {
    const found = await Order.findByPk(req.params.id);
    if (found) await found.destroy();
    DeletedOrder.create({ ...found.dataValues });
    res.send(`Order ${found.name} successfully deleted.`);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
});

module.exports = OrdersController;
