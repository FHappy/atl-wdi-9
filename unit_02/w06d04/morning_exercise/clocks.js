var calculate = function(hourHand, minuteHand) {
  if (hourHand < 0 || hourHand > 12) {
    return "out of range";
  } else if (minuteHand < 0 || minuteHand > 60) {
    return "out of range";
  }

  var minuteHandPos = (minuteHand / 60) * 360;
  var hourHandPos = ((minuteHand / 60) * 30) + ((hourHand % 12) / 12) * 360;

  // var answer = [hourHandPos, minuteHandPos];
  if (hourHandPos > minuteHandPos) {
    var firstDiff = hourHandPos - minuteHandPos;
    var secondDiff = (360 - hourHandPos) + minuteHandPos;
  } else {
    var firstDiff = minuteHandPos - hourHandPos;
    var secondDiff = (360 - minuteHandPos) + hourHandPos;
  }
  var answer = [firstDiff, secondDiff];
  return answer;
};

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
