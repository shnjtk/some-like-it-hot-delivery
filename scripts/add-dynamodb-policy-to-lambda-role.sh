#!/bin/sh

ROLE_NAME="some-like-it-hot-executor"
ROLE_FILE=$(cd $(dirname $0) && pwd)/../roles/dynamodb.json

aws iam put-role-policy             \
  --role-name $ROLE_NAME            \
  --policy-name DeliveryApiDynamoDB \
  --policy-document file://$ROLE_FILE
