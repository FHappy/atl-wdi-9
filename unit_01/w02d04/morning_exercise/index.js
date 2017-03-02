// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

function makeChange(price, payment) {
  if (payment < price) {
    return "Not enough money you broke ass trick";
  }

  var change = (payment - price) * 100;
  function coinAmount (currChange, coinValue) {
    var tempCoin = (currChange / coinValue);
    var numOfCoins = Math.floor(tempCoin);
    change = Math.floor((tempCoin - numOfCoins) * coinValue);
    return numOfCoins;
  }

  var quarters = coinAmount(change, 25);
  var dimes = coinAmount(change, 10);
  var nickels = coinAmount(change, 5);
  var pennies = change + 1;
  var result = [quarters, dimes, nickels, pennies];

  return result;
  //ALTERNATIVELY
  // var tempQuarters = (change / 25);
  // var quarters = Math.floor(tempQuarters);
  // change = Math.floor((tempQuarters - quarters) * 25);
  // var tempDimes = (change / 10);
  // var dimes = Math.floor(tempDimes);
  // change = Math.floor((tempDimes - dimes) * 10);
  // var tempNickels = (change / 5);
  // var nickels = Math.floor(tempNickels);
  // change = Math.floor((tempNickels - nickels) * 5);

}

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
