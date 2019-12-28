const express = require('express');
const { Order } = require('../db/models');

const OrdersController = express.Router();

OrdersController.get('/', async (req, res) => {
  try {
    const users = await Order.findAll();
    res.send(users);
  } catch (e) {
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
      status: req.body.status || 'requested',
    });
    res.send(created);
  } catch (e) {
    res.status(400).send(e.name);
  }
});

module.exports = OrdersController;
