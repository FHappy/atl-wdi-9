var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/presidents-app');

<<<<<<< HEAD
=======
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
app.use(cors());

app.use(express.static('public'));

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

app.listen(3000);
