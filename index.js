'use strict';

const express = require('express'),
      twilio = require('twilio');

const cfg = require('./config');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.post('/sms', function (req, res) {
  var twiml = new twilio.TwimlResponse();
  twiml.message("I'm a robot. Stop texting me, Kady.");

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

});

app.listen(cfg.PORT, function () {
  console.log('Listening on port ' + cfg.PORT);
});
