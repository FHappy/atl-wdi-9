var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', function(req, res){
  User.find({})
    .exec(function(err, users){
      if (err) { console.log(err); }
      console.log(users);
      res.render('users/index.hbs', {
        users: users
      });
      // res.send(users);
    });


});

// USER CREATE ROUTE
router.get('/new', function(req, res) {
  res.render('users/new.hbs');
});

router.post('/', function(req, res){
  var user = new User({
    first_name: req.body.first_name,
    email: req.body.email,
    items: req.body.items
  });
  user.save(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    // res.send(user);
    res.redirect('/users');
  });
});

// USER SHOW ROUTE
router.get('/:id', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    res.render('users/show.hbs', {
      user: user
    });
    // res.send(user);
  });
});


// USER UPDATE ROUTE
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      res.render('users/edit.hbs', {
        user: user
      });
    });
});

router.patch('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, { new: true })
    .exec(function(err, user){
      if (err) { console.log(err); }
      console.log(user);
      res.redirect('/users');
      // res.send(user);
  });
});

// USER DESTROY
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log('User deleted!');
    res.redirect('/users');
    // res.send("User deleted");
  });
});

// ADD A NEW ITEM
router.get('/:id/items', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      console.log(user);
      res.render('items/index.hbs', {
        user: user,
        items: user.items
      });
    });
});

router.get('/:id/items/new', function(req, res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      res.render('items/new.hbs', {
        user: user
      });
    });
});

router.post('/:id/items', function(req, res){
  User.findById(req.params.id)
    .exec(function(err, user){
      user.items.push(new Item({name: req.body.name}));
      user.save(function(err){
        if (err) console.log(err);
        // res.send(user);
      });
      res.redirect('/users/' + req.params.id + '/items');
    });
});

// edit an item
router.get('/:userId/items/:id/edit', function(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      var item = {};
      for (x of user.items) {
        console.log(x);
        if (x._id == req.params.id) {item = x;}
      }
      console.log(item);
      res.render('items/edit.hbs', {
        user: user,
        item: item
      });
    });
});

router.patch('/:userId/items/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id)
    .exec(function(err, item) {
      if (err) {console.log(err);}

    })
});

// REMOVE AN ITEM
router.delete('/:userId/items/:id', function(req, res){
  User.findByIdAndUpdate(req.params.userId, {
    $pull:{
      items: {_id: req.params.id}
    }
  })
    .exec(function(err, item){
      if (err) console.log(err);
      var path = `/users/${req.params.userId}/items`;
      res.redirect(path);
      // res.send(item + " Item deleted");
    });
});
// 
// router.get('/:id/project-ideas/', function(req, res) {
//   console.log(req.params);
//   User.findById(req.params.id)
//     .exec(function(err, user) {
//       if (err) {console.log('error because ' + err);}
//       res.render('project_ideas/index.hbs', {
//         projectIdeas: user.project_ideas
//       });
//     });
// });



module.exports = router;
