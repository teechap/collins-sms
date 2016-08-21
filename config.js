'use strict';

const _ = require('lodash');

function trimEnv(key) {
  return (process.env[key] || '').trim();
}

module.exports = {
  TWILIO_ACCOUNT_SID: trimEnv('TWILIO_ACCOUNT_SID'),
  TWILIO_AUTH_TOKEN: trimEnv('TWILIO_AUTH_TOKEN'),
  TWILIO_NUMBER: trimEnv('TWILIO_NUMBER'),
  APP_PORT: _.toNumber(trimEnv('APP_PORT') || 3000)
};
