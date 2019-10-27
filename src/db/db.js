const Sequelize = require('sequelize');
const url = require('./config');

const db = new Sequelize(url, { dialect: 'postgres', native: true });

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(e => {
    console.error('Unable to connect to the database:', e);
  });

module.exports = db;
