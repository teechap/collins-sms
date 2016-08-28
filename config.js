'use strict';

const _ = require('lodash');

function trimEnv(key) {
  return (process.env[key] || '').trim();
}

module.exports = {
  TWILIO_ACCOUNT_SID: trimEnv('TWILIO_ACCOUNT_SID'),
  TWILIO_AUTH_TOKEN: trimEnv('TWILIO_AUTH_TOKEN'),
  TWILIO_NUMBER: trimEnv('TWILIO_NUMBER'),
  TWILIO_WEBHOOK_URL: trimEnv('TWILIO_WEBHOOK_URL'),
  PORT: _.toNumber(trimEnv('PORT') || 3000)
};
