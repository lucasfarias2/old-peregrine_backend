const Sequelize = require('sequelize');
const url = require('./config');

const db = new Sequelize(url, { dialect: 'postgres', native: true });

db.authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Connection has been established successfully.');
  })
  .catch(e => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database:', e);
  });

module.exports = db;
