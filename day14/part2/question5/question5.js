var fs = require("fs");
var data = fs.readFileSync("question5.txt").toString().split(",");


var sum = 0;
for(var i = 0; i < data.length;i++){
    var parseData = parseInt(data[i]);
    sum += parseData;
}
var sum1 = sum.toString()
fs.writeFileSync("question5Out.txt",sum1);
