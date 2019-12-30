const { BOOLEAN, STRING } = require('sequelize');

module.exports = {
  id: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  locale: {
    type: STRING,
    allowNull: false,
  },
  currency_id: {
    type: STRING,
    allowNull: false,
  },
  phone_code: {
    type: STRING,
    allowNull: false,
  },
  disabled: {
    type: BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
};
