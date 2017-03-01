//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
function lengths(arrayOfStrings) {
  var arrayOfNumbers = arrayOfStrings.map(i => i.length);
  return arrayOfNumbers;
}
// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
function transmogrifier(base1, base2, exp) {
  result = Math.pow(base1 * base2, exp);
  return result;
}
// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
function wordReverse(str) {
  var words = [];
  var index = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      words.push(str.substring(index, i));
      index = i + 1;
    }
    if (i === str.length - 1) {words.push(str.substring(index));}
  }

  var result = "";

  for (var j = words.length - 1; j >= 0; j--) {
    result += (words[j] + " ");
  }
  return result;
  //I know the .join(), .split(), .reverse() methods exist but that wouldn't be
  //very fun.
}
