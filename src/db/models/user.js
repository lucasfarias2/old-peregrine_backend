const { STRING, Model } = require('sequelize');
const db = require('../db');

class User extends Model {}
User.init(
  {
    uid: {
      type: STRING,
      allowNull: true,
      unique: true,
    },
    email: {
      type: STRING,
      allowNull: true,
      unique: true,
    },
    name: {
      type: STRING,
      allowNull: true,
    },
    phone: {
      type: STRING,
      allowNull: true,
    },
    access: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'user' }
);

module.exports = User;
