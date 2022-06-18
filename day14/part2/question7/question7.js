var fs = require("fs");

var arr = fs.readFileSync("question7.txt").toString().split("\n");
var sum = 0;
for(var i =0; i<arr.length;i++){
    var arr2 = arr[i].split(":");
    sum += parseInt(arr2[3]);
}

console.log("Sum of Salaries  = " + sum);

