'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

const createDelivery = require('./handlers/create-delivery');

api.post('/delivery', request => {
  // TODO: authentication
  return createDelivery(request.body);
}, {
  success: 201,
  error: 400,
})

module.exports = api;
