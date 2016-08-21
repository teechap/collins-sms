'use strict';

const express = require('express');

const cfg = require('./config');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.listen(cfg.APP_PORT, function () {
  console.log('Listening on port ' + cfg.APP_PORT);
});
