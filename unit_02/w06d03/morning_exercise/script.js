//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
  var numberOfGallons = 24901 / milesPerGallon;
  var cost = numberOfGallons * fuelPrice;

  return cost;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
  var costcoFruitJuice = a * b;
  var kirklandFruitJuice = c * d;
  var pureJuiceTotal = costcoFruitJuice + kirklandFruitJuice;

  var pureJuicePercentage = (pureJuiceTotal / (a + c)) / 100;
  return pureJuicePercentage;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
