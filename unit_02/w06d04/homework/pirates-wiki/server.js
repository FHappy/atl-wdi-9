var express          = require('express');
var app              = express();
var hbs              = require('hbs');
var bodyParser       = require('body-parser');
var logger           = require('morgan');
var methodOverride   = require('method-override');
var port             = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));

var piratesController = require(__dirname + '/controllers/pirates_controller.js');
app.use('/pirates', piratesController);

app.listen(port, function() {
  console.log('pirate server listening on port ' + port);
});
