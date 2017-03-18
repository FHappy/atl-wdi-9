var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var hbs             = require('hbs');
var logger          = require('morgan');
var methodOverride  = require('method-override');
var port            = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

var pokemonController = require(__dirname + '/controllers/pokemon.controller.js');
app.use('/pokemon', pokemonController);




app.listen(port, function() {
  console.log('server slinging hot data on port' + port);
});
