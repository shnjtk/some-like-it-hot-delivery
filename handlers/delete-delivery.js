'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

// TODO: check if it is within 10 minutes from creation
function deleteDelivery(request) {
  const deliveryId = request.pathParams.id;

  return docClient.delete({
    TableName: 'pizza-deliveries',
    Key: {
      deliveryId: deliveryId
    },
  }).promise();
}

module.exports = deleteDelivery;
