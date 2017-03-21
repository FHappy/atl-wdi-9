'use strict';

const fs = require('fs');

let inFile = process.argv[2];

// fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
//   if (error) {
//     console.error(error);
//   }
//
//   // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']
//
//   let lines = content.split('\n');
//
//   // clean up the array by removing the empty line
//   lines.pop();
//
//   lines.forEach(function(line) {
//     console.log('Hello, ' + line + '!');
//   });
// });

var fsPromise = new Promise(function(resolve, reject) {
  fs.readFile(inFile, function(err, data) {
    var lines = data.toString();
    if (lines) {resolve(lines);}
    else {reject(err);}
  });
});

fsPromise
  .then(function(fromResolve) {
    console.log(fromResolve);
  })
  .catch(function(fromReject) {
    console.log('bummer, error occured at: ' + fromReject);
  });
