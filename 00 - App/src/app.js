  
'use strict'
require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

//Carregando as Models
require('./app/models/Provider');

// Carrega as rotas
const copyright = require('./routes/Copyright');
const provider = require('./routes/Provider');

app.use(function (req, res, next) {
  var origin = req.get('origin'); 
  res.header('Access-Control-Allow-Origin', origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/', copyright);
app.use('/provider', provider);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
});