
const express = require('express');
const app= express();
const cors=require('cors')
const morgan = require('morgan');
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use(require('./routes/routes'))
module.exports = app;