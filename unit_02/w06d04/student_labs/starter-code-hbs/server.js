/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
/* app settings*/
var bodyParser = require('body-parser');
var app         = express();
var port        = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
/* set up the application params*/
var todosController = require(__dirname + '/controllers/todos_controller.js');
app.use('/todos', todosController);

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/recipes', function(req,res) {
  res.render('index.hbs', {

  });
});

/* INDEX TODOS */

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
