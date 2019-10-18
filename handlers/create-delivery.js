'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
const uuidv4 = require('uuid/v4'); // used to generate a deliveryId

/**
 * Create a new delivery data.
 * request has following parameters.
 *   - pickupAddress (optional)
 *   - deliveryAddress
 *   - pickupTime (optional)
 *   - webhookUrl
 */
function createDelivery(request) {
  if (!request || !request.deliveryAddress || !request.webhookUrl) {
    throw new Error('deliveryAddress and webhookUrl must be specified.');
  }

  const deliveryId = uuidv4();
  const createdAt = new Date();

  return docClient.put({
    TableName: 'pizza-deliveries',
    Item: {
      deliveryId: deliveryId,
      pickupAddress: request.pickupAddress || 'Aunt Maria Pizzeria',
      deliveryAddress: request.deliveryAddress,
      pickupTime: request.pickupTime,
      webhookUrl: request.webhookUrl,
      createdAt: createdAt.toISOString(),
    }
  })
    .promise()
    .then(result => {
      console.log('Register a new delivery.', result);
      // TODO: We should retrieve deliveryId from result.Attributes but it's undefined.
      return { deliveryId: deliveryId };
    })
    .catch(error => {
      console.log('Failed to save a new delivery.', error);
      throw error;
    })
}

module.exports = createDelivery;
