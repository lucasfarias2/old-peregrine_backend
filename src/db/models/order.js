const { STRING, Model } = require('sequelize');
const db = require('../db');

class Order extends Model {}
Order.init(
  {
    title: {
      type: STRING,
      allowNull: true,
    },
    description: {
      type: STRING,
      allowNull: true,
    },
    service_id: {
      type: STRING,
      allowNull: false,
    },
    owner_id: {
      type: STRING,
      allowNull: false,
    },
    customer_id: {
      type: STRING,
      allowNull: false,
    },
    status: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'order' }
);

module.exports = Order;
