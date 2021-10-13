const config = require('./config');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { videoToken } = require('./tokens');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sendTokenResponse = (token, res) => {
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt(),
    })
  );
};

app.get('/video/token', (req, res) => {
  const identity = req.query.identity;
  const room = req.query.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});

app.post('/video/token', (req, res) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});

const dist = '../build';
app.use('/', express.static(`${__dirname}/${dist}`));
app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, `/${dist}/index.html`));
});

app.listen(config.port, () =>
  console.log(`Express server is running on localhost:${config.port}`)
);
