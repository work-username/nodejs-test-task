const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const textParser = bodyParser.text({ type: '*/*' });

app.listen(port, () => {
  console.log(`Micro-service on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/hello/:slug', (req, res) => {
  res.send(`Hello ${req.params.slug}`);
});

app.post('/post', textParser, (req, res) => {
  res.send(req.body);
});
