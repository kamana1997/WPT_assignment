//Importing the module
var c = require("./calc"); 

var d = require("./calc_obj");
// always take linux path system in nodejs
// c acts as a object now

var result = c.add(18,20);
console.log("Addition = ",result);

result = c.sub(30,40);
console.log("Substraction = ",result);

var result = d.add(100,20);
console.log("Addition = ",result);

result = d.sub(60,40);
console.log("Substraction = ",result);