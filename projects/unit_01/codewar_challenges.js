function duplicateElements(m, n) {
    for (var i = 0; i < m.length; i++) {
      for (var j = 0; j < n.length; j++) {
        if (m[i] === n[j]) {return true;}
      }
    }

    return false;
}


function getMean(arr, x, y) {
  if ((x <= 1) || (y <= 1)) {return -1;}
  else if ((x > arr.length) || (y > arr.length)) {return -1;}
  var xMean = arr.slice(0, x);
  var yMean = arr.slice(arr.length - y);

  xMean = xMean.reduce(function(acc, value) {
      return acc + (value / xMean.length);
    }, 0);

  yMean = yMean.reduce(function(acc, value) {
    return acc + (value / yMean.length);
  }, 0);

  return (xMean + yMean) / 2;

}

