'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function getDeliveries(request) {
  const deliveryId = request.pathParams.id;

  if (typeof deliveryId === 'undefined') {
    return docClient.scan({
      TableName: 'pizza-deliveries'
    })
      .promise()
      .then(data => {
        return data.Items;
      })
      .catch(error => {
        console.log('Failed to scan table', error);
        throw error;
      });
  }

  return docClient.get({
    TableName: 'pizza-deliveries',
    Key: {
      deliveryId: deliveryId
    },
  })
    .promise()
    .then(data => {
      return data.Item;
    })
    .catch(error => {
      console.log('Failed to get delivery', error);
      throw error;
    })
}

module.exports = getDeliveries;
