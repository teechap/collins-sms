'use strict';

const express = require('express'),
      bodyParser = require('body-parser'),
      twilio = require('twilio');

const cfg = require('./config');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello, world!');
});

app.post('/sms', twilio.webhook(), function (req, res) {
  // webhook() validates that the POST request is really from Twilio
  // and autmagically handles twiml objects passed to res.send().
  
  var twiml = new twilio.TwimlResponse();
  twiml.message("You validated the Twilio message, congrats.");
  res.send(twiml);
});

app.listen(cfg.PORT, function () {
  console.log('Listening on port ' + cfg.PORT);
});
