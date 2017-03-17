var express         = require('express');
var app             = express();
var logger          = require('morgan');
var hbs             = require('hbs');
var methodOverride  = require('method-override');
var port            = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

var todontController = require('./controllers/todont.controller.js');
app.use('/todonts', todontController);

app.set('viwe engine', 'hbs');







app.listen(port, function() {
  console.log('Server is running at port ' + port);
});
