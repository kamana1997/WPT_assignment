var readLine = require("readline");
var inp = readLine.createInterface({
    input : process.stdin,
    output: process.stdout
});

inp.question("Enter num 1:" , function(num1){
    inp.question("Enter num 2:" , function(num2){
        console.log(parseInt(num2) + parseInt(num1));
        inp.close();
    });
});




