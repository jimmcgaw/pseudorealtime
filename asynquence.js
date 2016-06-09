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
  });
}

function readFile(filename){
  var sq = ASQ();

  return fs.readFile(filename, sq.errfcb() );

  return sq;
}

function delayMessage(done, contents){
  setTimeout(function(){
    done(contents);
  }, 1000);
}

function sayWithASQ(filename){
  return readFile(filename)
    .then(delayMessage);
}

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.say = say;
module.exports.sayAsync = sayAsync;
module.exports.sayAsyncWithTimeout = sayAsyncWithTimeout;
module.exports.sayWithASQ = sayWithASQ;
