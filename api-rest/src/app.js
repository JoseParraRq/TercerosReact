
const express = require('express');
const app= express();
const cors=require('cors')
const morgan = require('morgan');
require('dotenv').config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(require('./routes/routes'))
module.exports = app;