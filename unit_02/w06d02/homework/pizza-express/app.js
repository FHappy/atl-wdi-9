var express = require('express');
var app = express();
var port = 3000;
var hbs = require('hbs');

app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

var orderController = require(__dirname + '/controllers/order_controller.js');
app.use('/order', orderController);

var toppingsController = require(__dirname + '/controllers/toppings_controller.js');
app.use('/toppings', toppingsController);

var indexController = require(__dirname + '/controllers/index_controller.js');
app.use('/', indexController);

app.listen(port, function() {
  console.log("==========================");
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================");
});
