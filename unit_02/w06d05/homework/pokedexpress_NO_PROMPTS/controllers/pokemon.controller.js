var express     = require('express');
var router      = express.Router();
var pokeList    = require('../models/poke_array.js');

router.get('/', function(req, res) {
  res.render('index.hbs', {
    pokemon: pokeList
  })
});

router.get('/:id', function(req, res) {
  var index = req.params.id - 1;
  var currentPokemon = pokeList[index];

  console.log(currentPokemon.misc);
  res.render('show.hbs', {
    pokemon: currentPokemon
  })
  console.log(index);
});








module.exports = router;
