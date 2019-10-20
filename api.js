'use strict';

const Api = require('claudia-api-builder');
const api = new Api();

const createDelivery = require('./handlers/create-delivery');
const getDeliveries = require('./handlers/get-deliveries');

api.post('/delivery', request => {
  // TODO: authentication
  return createDelivery(request.body);
}, {
  success: 201,
  error: 400,
});

api.get('/delivery', request => {
  // TODO: authentication
  return getDeliveries(request);
}, {
  error: 400,
});

api.get('/delivery/{id}', request => {
  // TODO: authentication
  return getDeliveries(request);
}, {
  error: 400,
});

module.exports = api;
