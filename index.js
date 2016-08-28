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

const opts = {
  url: 'https://collins-sms.herokuapp.com/sms'
};

app.post('/sms', function (request, response) {

  if (twilio.validateExpressRequest(request, cfg.TWILIO_AUTH_TOKEN, opts)) {

    var twiml = new twilio.TwimlResponse();
    twiml.message("You validated the Twilio message, congrats.");
    response.type('text/xml');
    response.send(twiml.toString());

  } else {
    response.status(403).send("POST request was not authenticated from Twilio.");
  }
});

app.listen(cfg.PORT, function () {
  console.log('Listening on port ' + cfg.PORT);
});
