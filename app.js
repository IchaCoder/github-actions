const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Getting data...');

  res.send('Works on my machine.');
});

module.exports = app;
