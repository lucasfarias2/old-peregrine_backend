/* eslint-disable max-classes-per-file */
const { STRING, Model } = require('sequelize');
const db = require('../db');

class User extends Model {}
User.init(
  {
    uid: {
      type: STRING,
      allowNull: true,
      primaryKey: true,
    },
    email: {
      type: STRING,
      allowNull: true,
    },
    name: {
      type: STRING,
      allowNull: false,
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
