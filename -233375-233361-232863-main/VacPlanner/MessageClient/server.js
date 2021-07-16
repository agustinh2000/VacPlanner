const express = require('express');
const app = express();
const config = require('config');
const port = config.get('server.port');
const url = config.get('server.url');
const router = require('./controllers/router');
const cors = require('cors');

module.exports.initServer = async function () {
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(url, router);

  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
};
