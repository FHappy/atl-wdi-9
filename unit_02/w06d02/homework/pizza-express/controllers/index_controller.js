var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  // res.send('Welcome to Pizza Express!');
  res.render('index.hbs', {
    message: 'Welcome to Pizza Express!'
  });
})

module.exports = router;
