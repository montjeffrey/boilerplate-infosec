const express = require('express');
const helmet = require('helmet');
const app = express();

const helmetVersion = require('helmet/package.json').version;
if(helmetversion !== "3.21.3"){
  throw new Error(`Helmet version mismatch: expected 3.21.3, got ${helmetVersion}`);
}

app.use(helmet());













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
