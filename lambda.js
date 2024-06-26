const awsServerlessExpress = require("aws-serverless-express");
const server = require("./dist/nestcast-web/server/main.js");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

const binaryMimeTypes = [
  "application/javascript",
  "application/json",
  "application/octet-stream",
  "application/xml",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/svg",
  "image/svg+xml",
  "image/heic",
  "image/x-icon",
  "text/comma-separated-values",
  "text/css",
  "text/html",
  "text/javascript",
  "text/plain",
  "text/text",
  "text/xml",
  "application/x-font-ttf",
  "application/x-font-woff",
  "application/x-font-woff2",
  "font/ttf",
  "font/woff",
  "font/woff2",
];

const app = server.app();
app.use(awsServerlessExpressMiddleware.eventContext());
const serverProxy = awsServerlessExpress.createServer(
  app,
  null,
  binaryMimeTypes
);

module.exports.ssrserverless = (event, context) =>
  awsServerlessExpress.proxy(serverProxy, event, context);
