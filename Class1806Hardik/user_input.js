var readLine = require("readline"); //inbuilt module


var inp = readLine.createInterface({ //connects with stdinput and stdoutput
    input: process.stdin,
    output: process.stdout
});

inp.question("Enter Name \n", function(data){ //this functon is a call back functionnp
    console.log("Welcome",data)
    inp.close();
}); //asynchronous function

console.log("\n After input \n")