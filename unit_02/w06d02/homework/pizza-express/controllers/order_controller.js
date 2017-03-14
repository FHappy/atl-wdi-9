var express = require('express');
var router = express.Router();


router.get('/:amount/:size', function(req, res, next) {
  // res.send(`Your order for ${req.params.amount} ${req.params.size}` +
  //          ` pizzas will be ready in 1 minute!`);
  res.render('order.hbs', {
    amount: req.params.amount,
    size: req.params.size
  });
});



module.exports = router;
