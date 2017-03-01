// Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {return num1;}
  else {return num2;}
}

// Question 2
function maxOfThree(num1, num2, num3) {
  var max = num1;
  if (num2 > max) {max = num2;}
  if (num3 > max) {max = num3;}
  return max;
}

// Question 3
function isCharacterAVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (char in vowels) {return true;}
  else {return false;}
}

// Question 4
function sumArray(nums) {
  var result = nums.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  return result;
}


// Question 4
function multiplyArray(nums) {
  var result = nums.reduce(function(acc, val) {
      return acc * val;
                }, 1);
  return result;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}



// Question 6
var reverseString = function (str){
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};


// Question 7
function findLongestWord (words) {
  var max = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > max.length) {max = words[i];}
  }

  return max;
}

// Question 8
function filterLongWords (words, i) {
  var result = [];
  for (x of words) {
    if (x.length <= i) {result.push(x);}
  }
  return result;
}


// Bonus 1
//??????
String.prototype.reverseString = function (){
  var result = "";
  for (var i = this.length - 1; i >= 0; i--) {
    result += this[i];
  }
  return result;
};


// Bonus 2
function charactersOccurencesCount(str) {
  var result = {};
  for (var i = 0; i < str.length; i++) {
    if (!result[str[i].toLowerCase()]) {
      result[str[i].toLowerCase()] = 1;
    } else {result[str[i]]++;}
  }
  return result;
}

