var express = require('express');
var app = express();
var hbs = require('hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/public'));

var recipes = require('./recipes.js');
app.set('view engine', 'hbs');



var recipesController = require('./controllers/recipes_controller.js');
app.use('/recipes', recipesController);


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
