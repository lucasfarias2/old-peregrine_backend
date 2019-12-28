const { STRING } = require('sequelize');

module.exports = {
  name: {
    type: STRING,
    allowNull: false,
  },
  category_id: {
    type: STRING,
    allowNull: false,
  },
};
