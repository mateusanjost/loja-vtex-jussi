const corsAnywhere = require('cors-anywhere');
const express = require('express');
const apicache = require('apicache');
const expressHttpProxy = require('express-http-proxy');

const CORS_PROXY_PORT = 5000;

corsAnywhere.createServer({}).listen(CORS_PROXY_PORT, () => {
  console.log(
    `Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`
  );
});


let app = express();
app.get('/*', cacheMiddleware());
app.options('/*', cacheMiddleware());

app.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`));

const APP_PORT = process.env.PORT || 8080;
app.listen(APP_PORT, () => {
  console.log(`External CORS cache server started at port ${APP_PORT}`);
  console.log(`Keys found in the inspection of the brastemp store:
  API_KEY: "brastemp",
  SECRET_KEY: "FSSQfPmAoVgflrn3DKXlqQ==",
  CATEGORY_ID_ELETRO: "Eletrodom%C3%A9sticos",
  CHAORDIC_DEVICE_ID: "legacy_c",
  GMAPS_KEY: "AIzaSyBnIo1bYRVUTD4ZbDxXpXXtSOvtyX6gm_E",

  warning: secret key visible in front?
  `)
});


function cacheMiddleware() {
  const cacheOptions = {
    statusCodes: { include: [200] },
    defaultDuration: 60000,
    appendKey: (req, res) => req.method
  };
  let cacheMiddleware = apicache.options(cacheOptions).middleware();
  return cacheMiddleware;
}