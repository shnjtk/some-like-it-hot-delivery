'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function getDeliveries(request) {
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

module.exports = getDeliveries;
