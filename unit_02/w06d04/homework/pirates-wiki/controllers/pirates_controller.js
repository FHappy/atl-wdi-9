var express = require('express');
var router = express.Router();
var pirates = require('../models/pirates.js');

router.get('/', function(req, res) {
  res.render('index.hbs', {
    piratesList: pirates
  });
});

router.get('/new', function(req, res) {
  res.render('new.hbs');
});

router.post('/', function(req, res) {
  var newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  }

  pirates.push(newPirate);
  res.redirect('/pirates');
});

router.get('/:id/edit', function(req, res) {
  res.render('edit.hbs', {
    pirate: pirates[req.params.id],
    id: req.params.id
  });
});

router.put('/:id', function(req, res) {
  var currentPirate = pirates[req.params.id];

  currentPirate.name = req.body.name;
  currentPirate.birthplace = req.body.birthplace;
  currentPirate.death_year = req.body.death_year;
  currentPirate.base = req.body.base;
  currentPirate.nickname = req.body.nickname;

  res.redirect('/pirates');
})

router.delete('/:id', function(req, res) {
  pirates.splice(req.params.id, 1);
  res.redirect('/pirates');
});
router.get('/:id', function(req, res) {
  res.render('show.hbs', {
    pirate: pirates[req.params.id]
  });
});





module.exports = router;
