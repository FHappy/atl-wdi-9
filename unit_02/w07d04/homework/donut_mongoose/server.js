//======================
// REQUIREMENTS
//======================
// require express, mongoose, body-parser, method-override
var express           = require("express");
var app               = express();
var mongoose          = require("mongoose");
var bodyParser        = require("body-parser");
var methodOverride    = require("method-override");
var hbs               = require("hbs");
var logger            = require('morgan');


//======================
// MIDDLEWARE
//======================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set('views', './views');

app.use(express.static('public'));
app.use( logger('dev'));

//======================
// CONTROLLERS
//======================
//for seed file, seed the database
var seedController = require('./db/seeds.js');
app.use('/seed', seedController);

//for root directory, show all donuts
var donutsController = require('./controllers/donuts.js');
app.use('/', donutsController);

//======================
// LISTENERS
//======================
//CONNECT MONGOOSE TO "donut_store"
mongoose.connect('mongodb://localhost/donut_store');
var db = mongoose.connection;

//CREATE THE MONGOOSE CONNECTION and SET APP TO LISTEN to 3000
db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('database is connected, lol');
});

app.listen(4000, function() {
  console.log('app is listening on port 4000');
});
