var express = require('express');
var app = express();
var port = 3000;
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', function(req, res, next) {
  res.send('Welcome to Pizza Express!');
})

app.get('/topping/:type', function(req, res, next) {
  res.send(`${req.params.type} pizza! Good choice.`);
});

app.get('/order/:amount/:size', function(req, res, next) {
  res.send(`Your order for ${req.params.amount} ${req.params.size}` +
           ` pizzas will be ready in 1 minute!`);
});

app.listen(port, function() {
  console.log("==========================");
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================");
});
