var hello = "hello from Node JS Variable!"
var path = require("path");
//these are comments in js
console.log('Printing variable hello : ${hello}');
console.log("Directory name: " + __dirname);
console.log("Directory and file name: " + __filename);

console.log("Using PATH module: ")
console.log(`Hello from file ${path.basename(__filename)}`);

console.log(`Process args: ${process.argv[1]}`)
