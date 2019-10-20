# Some Like It Hot Delivery APIs (Claudia.js version)

## What is this repo?

This is a repository provides following APIs used in the book ["Serverless Application with Node.js"](https://www.manning.com/books/serverless-applications-with-node-js) published by Manning Publications.

- `POST /delivery`
- `GET /delivery`
- `GET /delivery/{id}`
- `DELETE /delivery/{id}`

This uses following AWS services so please note the cost.

- API Gateway
- Lambda
- DynamoDB

## How to use

**Default region is 'eu-central-1'. Please change it if you want.**

### 1. Install packages

```
$ npm install
```

### 2. Configure Claudia

```
$ npx claudia create --region eu-central-1 --api-module api
```

or

```
$ npm run create
```

### 3. Create DynamoDB table

```
$ ./scripts/create-dynamodb-table.sh
```

### 4. Add IAM policy to Lambda

```
$ ./scripts/add-dynamodb-poliicy-to-lambda-role.sh
```
