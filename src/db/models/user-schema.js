const { STRING } = require('sequelize');

module.exports = {
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
};
