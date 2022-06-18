var fs = require("fs");

var str = "This is Hardik Agarwal & Team"
//synchronous function 
//async: writeFile()
// if file does not exists crate it and overwrite
fs.writeFileSync("test.txt",str); 

fs.appendFileSync("test.txt","\nKamana Joy Udit");

//readFileSync return the buffer type not the string data.
var data = fs.readFileSync("test.txt");
// so to convert to string data we need to add toString()

console.log(data.toString());
