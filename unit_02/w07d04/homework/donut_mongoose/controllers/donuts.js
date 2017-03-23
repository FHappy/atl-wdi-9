//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express       = require('express');
var router        = express.Router();
var mongoose      = require('mongoose');
var Donut         = require('../models/donuts.js');

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', function(req, res) {
  Donut.find({})
    .exec(function(err, Donuts) {
      if (err) {console.log(err);}

      console.log(Donuts);
      res.render('products/index.hbs', {
        donuts: Donuts
      });
    });
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', function(req, res) {
  res.render('products/new.hbs');
});


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page

router.get('/:id', function(req, res) {
  Donut.findById(req.params.id)
    .exec(function(err, Donut) {
      if (err) {console.log(err);}

      res.render('products/show.hbs', {
        donut: Donut
      });
    });
});



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"

router.post('/', function(req, res) {
  var newDonut = new Donut({
    name: req.body.name,
    description: req.body.name,
    img: req.body.img,
    price: req.body.price,
    qty: req.body.qty
  });
  newDonut.save(function(err, donut) {
    if (err) {console.log(err);}
    console.log(donut);
    res.redirect('/');
  })
});

//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', function(req, res) {
  Donut.findById(req.params.id)
    .exec(function(err, donut) {
      if (err) {console.log(err);}
      console.log(donut);
      res.render('products/edit.hbs', {
        donut: donut
      });
    });
});


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.patch('/:id/edit', function(req, res) {
  Donut.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    qty: req.body.qty
  }, {new: true})
    .exec(function(err, donut){
      if (err) {console.log(err);}
      console.log(donut);
      res.redirect('/');
    });
});


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.delete('/:id', function(req, res) {
  Donut.findByIdAndRemove(req.params.id)
    .exec(function(err, donut) {
      if (err) {console.log(err);}
      console.log('donut deleted, DUN DON');
      res.redirect('/');
    });
});


//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;
