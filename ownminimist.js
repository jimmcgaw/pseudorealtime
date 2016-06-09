function printHelp(){
  console.log("hello.js");
  console.log("");
  console.log("usage:");
  console.log("--help         print this help");
  console.log("--file         print greet ${FILE}");
}

var args = require("minimist")(process.argv.slice(2), { string: "file" });

if (args.help || !args.file){
  printHelp();
  process.exit(1);
}

var hello = require("./helloworld.js");

// readFileSync implementation
// var contents = hello.say(args.file);
// contents is an array buffer
// console.log(contents);
// converts the buffer contents to a printable string
// console.log(contents.toString());

// async implementation

hello.sayAsync(args.file, function(err, contents){
  if (err){
    console.error("Error: " + err);
  } else {
    console.log(contents);
    console.log(contents.toString());
  }
});

hello.sayAsyncWithTimeout(args.file, function(err, contents){
  if (err){
    console.error("Error: " + err);
  } else {
    console.log(contents);
    console.log(contents.toString());
  }
})
