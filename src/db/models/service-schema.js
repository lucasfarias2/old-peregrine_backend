const { BOOLEAN, STRING } = require('sequelize');

module.exports = {
  name: {
    type: STRING,
    allowNull: false,
  },
  category_id: {
    type: STRING,
    allowNull: false,
  },
  disabled: {
    type: BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
};
