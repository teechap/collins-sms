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

app.post('/sms', function (req, res) {

  if (twilio.validateExpressRequest(req, cfg.TWILIO_AUTH_TOKEN)) {

    var twiml = new twilio.TwimlResponse();
    twiml.message("You validated the Twilio message, congrats.");
    res.end(twiml.toString());

  } else {
    res.status(403).send("POST request was not authenticated from Twilio.");
  }
});

app.listen(cfg.PORT, function () {
  console.log('Listening on port ' + cfg.PORT);
});
