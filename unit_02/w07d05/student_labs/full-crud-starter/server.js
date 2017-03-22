// Standard stuff
var express         = require('express');
var bodyParser      = require('body-parser');
var hbs             = require('hbs');
var logger          = require('morgan');
var app             = express();
var mongoose        = require('mongoose');
var methodOverride  = require('method-override');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));


// Mongoose stuff
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

// Now that we're connected, let's save that connection to the database in a variable.
var db = mongoose.connection;

var usersController = require("./controllers/usersController.js");
app.use('/users', usersController);

var projectIdeasController = require('./controllers/projectIdeas.controller.js');
app.use('/users/:userId/project-ideas', projectIdeasController);

// Will log an error if db can't connect to MongoDB
db.on('error', function(err){
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
  console.log("database has been connected!");
});

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
