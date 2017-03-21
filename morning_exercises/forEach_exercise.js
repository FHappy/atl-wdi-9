words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

function toUpperCase(words) {
  words.forEach(function(x) {
    console.log(x.toUpper());
  });
}

function squaredValues(nums) {
  nums.forEach(function(x) {
    console.log(Math.pow(x, 2));
  });
}

function getAverage(nums) {
  var sum = nums.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  var average = sum / nums.length;
  return average;
}

var products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

function logPrice(products) {
  var prices = [];
  products.forEach(x => prices.push(x.price));
  console.log(prices);
}

function discountedPrice(products) {
  var discounts = [];
  products.forEach(function(x) {
    var newItem = {
      name: x.name,
      price: x.price,
      discount: x.price / 2
    }
    discounts.push(newItem);
  });
  console.log(discounts);
}

function RaysOrder(orders) {
  orders.forEach(x => console.log(x[1]));
}


var myOrder = [
   ["lasagna", "lasagna", "lasagna", "lasagna"],
   ["lasagna", "lasagna", "lasagna", "lasagna"],
   ["lasagna", "lasagna", "lasagna lasagna", "lasagna"]
];

RaysOrder(myOrder);
