function say(filename){
 return fs.readFileSync(filename);
}

function sayAsync(filename, myCallback){
  return fs.readFile(filename, myCallback);
}

function sayAsyncWithTimeout(filename, myCallback) {
  return fs.readFile(filename, function(err, contents){
    if (err){
      myCallback(err);
    } else {
      setTimeout(function(){
        myCallback(null, contents);
      }, 1000);
    }
  })
}

var fs = require("fs");

module.exports.say = say;
module.exports.sayAsync = sayAsync;
module.exports.sayAsyncWithTimeout = sayAsyncWithTimeout;
