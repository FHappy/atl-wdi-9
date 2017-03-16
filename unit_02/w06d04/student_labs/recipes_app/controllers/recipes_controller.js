var express = require('express');
var router = express.Router();
var recipes = require('../recipes.js');

router.get('/', function(req,res) {
  res.render('index.hbs', {
    recipes: recipes.seededRecipes
  });
});

router.get('/new', function(req, res) {
    res.render('new.hbs');
});

router.post('/', function(req, res) {
  var newVeggie = true;
  if (req.body.veggie === 'false') {
    newVeggie = false;
  }
  var newRecipe = {
    title: req.body.title,
    veggie: newVeggie,
    imageUrl: req.body.imageUrl
  }

  recipes.seededRecipes.push(newRecipe);
  res.redirect('/recipes');
});

router.get('/:id', function(req, res) {
  var recipe = recipes.seededRecipes[req.params.id];

  res.render('show.hbs', {
    recipe: recipe
  })
});




module.exports = router;
