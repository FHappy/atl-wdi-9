// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
  // Your Code Here
  if (numsArray.length === 0) {return 0;}
  var result = numsArray.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  return result;
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  // Your Code Here
  function biggerThan10(num) {
    return num > 10;
  }
  var result = numsArray.filter(biggerThan10);
  return result;
};

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  // Your Code Here
  return numsArray.every(i => i > 10);
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  // Your Code Here
  function biggerThan5(word) {
    if (word.length >= 5) {return true;}
    else {return false;}
  }
  var result = words.filter(biggerThan5);
  return result;
};


// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  // Your Code Here
  if (words.length === 0) {return true;}
  return words.every(x => x.charAt(0).toLowerCase() === 'a');
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  // Your Code Here
  //no edge=case?
  if (words.length === 0) {return true;}
  for (var x of words) {
    if (x.charAt(0).toLowerCase() === 'b') {return true;}
  }
  return false;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  // Your Code Here
  if (n < 0) {return null;}
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;
  for (var i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) { vowelCount++;}
  }
  if (vowelCount >= n) {return true;}
  return false;
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  // Your Code Here
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  function hasTwoVowels(word) {
    var vowelCount = 0;
    for (var i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {vowelCount++;}
    }
    if (vowelCount >= 2) {return true;}
    return false;
  }

  var result = words.filter(hasTwoVowels);
  return result;
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  // Your Code Here
  if (words.length === 0) {return true;}
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  function hasTwoVowels(word) {
    var vowelCount = 0;
    for (var i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {vowelCount++;}
    }
    if (vowelCount >= 2) {return true;}
    return false;
  }
  var result = words.every(hasTwoVowels);
  return result;
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  // Your Code Here
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var x of words) {
    var vowelCount = 0;
    for (var i = 0; i < x.length; i++) {
      if (vowels.includes(x[i].toLowerCase())) {vowelCount++;}
    }
    if (vowelCount >= 2) {return true;}
  }
  return false;
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  // Your Code Here
  if (words.length === 0) {return true;}
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  function hasTwoVowels(word) {
    var vowelCount = 0;
    for (var i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {vowelCount++;}
    }
    if (vowelCount >= 2) {return false;}
    return true;
  }

  return words.every(hasTwoVowels);
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  // Your Code Here
  var result = {};
  for (var x of words) {
    result[x] = x.length;
  }
  return result;
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
