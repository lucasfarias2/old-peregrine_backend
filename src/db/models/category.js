const { STRING, Model } = require('sequelize');
const db = require('../db');

class Category extends Model {}
Category.init(
  {
    name: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'category' }
);

module.exports = Category;
