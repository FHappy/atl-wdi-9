var express = require('express');
var router = express.Router();


router.get('/:type', function(req, res, next) {
  // res.send(`${req.params.type} pizza! Good choice.`);
  res.render('toppings.hbs', {
    type: req.params.type
  });
});


module.exports = router;
