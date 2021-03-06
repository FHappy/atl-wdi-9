var express = require('express');
var router = express.Router({mergeParams: true});
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');
var session = require('express-session')

//LOGIN
router.get('/login', function(req, res) {
  res.render('users/login.hbs');
});

router.post('/login', authHelpers.loginUser, function(req, res){
  // console.log(req.sessions.currentUser);
  res.redirect('/users/' + req.session.currentUser._id);
});

router.delete('/', function(req, res){
  req.session.destroy(function(){
    res.redirect('/users');
  });
});

module.exports = router;
