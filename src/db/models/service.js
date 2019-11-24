const { STRING, Model } = require('sequelize');
const db = require('../db');

class Service extends Model {}
Service.init(
  {
    name: {
      type: STRING,
      allowNull: false,
    },
    category_id: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'service' }
);

module.exports = Service;
