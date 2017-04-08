'use strict';

const express = require('express');

// Constants
const PORT = 3300;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello Jenkins!  \n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
