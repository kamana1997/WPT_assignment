var temp = require("./question3");
temp.table();
var fs = require("fs");
var data = fs.readFileSync("question3.txt").toString();

console.log(data);
var str = "\n\nHello!!Writing in file"
fs.appendFileSync("question3.txt",str);
