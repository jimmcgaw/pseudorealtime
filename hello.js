function printHelp(){
  console.log("hello.js");
  console.log("");
  console.log("usage:");
  console.log("--help         print this help");
  console.log("--greeting     print the greeting ${GREETING}");
  console.log("--name         print greet ${NAME}");
}

var args = require("minimist")(process.argv.slice(2), { string: "name" });

if (args.help || !args.help){
  printHelp();
  process.exit(1);
}


var name = args.name;
var greeting = args.greeting;

console.log(greeting + ", " + name);
