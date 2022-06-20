var fs = require("fs");

// fs.readFile("demo.txt",function(err,data){
//     console.log(data.toString());
// });

// var myData = "This is my data that I am writing";

// // data must be in string format
// fs.writeFile("demo.txt",myData,function(err){
//     console.log("Done");
// });

var data = "\nAfter Apending\n";
fs.appendFile("demo.txt", data , function(err){
    console.log("DONE");
});