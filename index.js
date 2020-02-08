const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const db = require('./src/db/db');
const Router = require('./src/routes');

const server = express();
const port = process.env.port || 3000;
const serviceAccount = require('./peregrine-app-users-firebase-adminsdk-1dxjt-846cdc855a.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://peregrine-app-users.firebaseio.com',
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

server.use(Router);

db.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
});
