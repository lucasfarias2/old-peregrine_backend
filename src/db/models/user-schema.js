const { BOOLEAN, STRING } = require('sequelize');

module.exports = {
  uid: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: STRING,
    allowNull: true,
    unique: true,
  },
  email_verified: {
    type: BOOLEAN,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: STRING,
    allowNull: true,
  },
  disabled: {
    type: BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  access: {
    type: STRING,
    allowNull: true,
    defaultValue: 'CUSTOMER',
  },
};
