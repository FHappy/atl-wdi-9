var express = require('express');
var router = express.Router({mergeParams: true});

var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea = require('../models/project_idea.js');

router.get('/', function(req, res) {
  console.log(req.params);
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) {console.log('error because ' + err);}
      console.log('user is equal to ' + user);
      console.log(user.project_ideas);
      res.render('project_ideas/index.hbs', {
        user: user,
        projectIdeas: user.project_ideas
      });
    });
});

router.get('/new', function(req, res) {
  res.render('project_ideas/new.hbs', {
    userId: req.params.userId
  });
});

router.post('/', function(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      var idea = new ProjectIdea({
        description: req.body.description,
        in_progress: req.body.in_progress
      });
      user.project_ideas.push(idea);
      user.save(function(err) {
        if (err) {console.log(err);}
        // console.log(idea);
        res.redirect('/users');
      });
    })

});

// EDIT PROJECT IDEAS
router.get('/:projectIndex/edit', function(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) {console.log(err);}
      res.render('project_ideas/edit.hbs', {
        user: user,
        projectIdea: user.project_ideas[req.params.projectIndex]
      })
    })
});

router.patch('/:projectIndex', function(req, res) {

});








module.exports = router;
