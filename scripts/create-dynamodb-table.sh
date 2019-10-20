#!/bin/sh

TABLE_NAME="pizza-deliveries"
REGION="eu-central-1"

aws dynamodb create-table --table-name $TABLE_NAME                  \
  --attribute-definitions AttributeName=deliveryId,AttributeType=S  \
  --key-schema AttributeName=deliveryId,KeyType=HASH                \
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  --region $REGION                                                  \
  --query TableDescription.TableArn --output text
