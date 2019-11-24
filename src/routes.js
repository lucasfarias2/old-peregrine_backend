const express = require('express');
const UsersController = require('./controllers/users');
const OrdersController = require('./controllers/orders');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('You can query USERS, ORDERS');
});

Router.use('/users', UsersController);
Router.use('/orders', OrdersController);

module.exports = Router;
