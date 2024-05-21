// server.js
const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
