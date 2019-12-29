const { STRING } = require('sequelize');

module.exports = {
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
    allowNull: true,
    defaultValue: 'REQUESTED',
  },
};
