const express = require('express');
const UsersController = require('./controllers/users');
const OrdersController = require('./controllers/orders');
const ServicesController = require('./controllers/services');
const CategoriesController = require('./controllers/categories');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.send('You can query USERS, ORDERS, SERVICES, CATEGORIES');
});

Router.use('/users', UsersController);
Router.use('/orders', OrdersController);
Router.use('/services', ServicesController);
Router.use('/categories', CategoriesController);

module.exports = Router;
