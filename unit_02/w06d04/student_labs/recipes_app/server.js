var express = require('express');
var app = express();
var hbs = require('hbs');

var recipes = require('./recipes.js');
app.set('view engine', 'hbs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));

var recipesController = require('./controllers/recipes_controller.js');
app.use('/recipes', recipesController);

app.use(express.static(__dirname + '/public'));

// app.get('/recipes', function(req, res) {
//   res.send('route created, skkkk');
// });

// app.get('/recipes', function(req,res) {
//   res.render('index.hbs', {
//     recipes: recipes.seededRecipes
//   });
// });
//
// app.get('/recipes/new', function(req, res) {
//     res.render('new.hbs');
// });
//
// app.post('/recipes/', function(req, res) {
//   var newVeggie = true;
//   if (req.body.veggie === 'false') {
//     newVeggie = false;
//   }
//   var newRecipe = {
//     title: req.body.title,
//     veggie: newVeggie,
//     imageUrl: req.body.imageUrl
//   }
//
//   recipes.seededRecipes.push(newRecipe);
//   res.redirect('/recipes');
// });
//
// app.get('/recipes/:id', function(req, res) {
//   var recipe = recipes.seededRecipes[req.params.id];
//
//   res.render('show.hbs', {
//     recipe: recipe
//   })
// });



var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
