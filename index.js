'use strict';

const express = require('express'),
      twilio = require('twilio');

const cfg = require('./config');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.post('/sms', function (req, res) {
  var twiml = twilio.twimlResponse();
  twiml.say('Thanks for texting!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

});

app.listen(cfg.PORT, function () {
  console.log('Listening on port ' + cfg.PORT);
});
