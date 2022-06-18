const { stdin, stdout } = require("process");
var readline = require("readline");
var inp = readline.createInterface({
    input: stdin,
    output: stdout
});
exports.calc = function () {
    inp.question("Enter number 1 ", function (n1) {
        inp.question("Enter number 2 ", function (n2) {
            inp.question("Enter operator ", function (opr) {
                var num1 = parseInt(n1);
                var num2 = parseInt(n2);
                 if(opr == "add"){
                    console.log("Addition = "+(num1+num2));
                 }
                 if(opr == "sub"){
                    console.log("Subtraction = "+((num1>=num2) ? (num1-num2): (num2-num1)));
                 }
                 if(opr == "mul"){
                    console.log("Multiplication = "+(num1*num2));
                 }
                 if(opr == "div"){
                    console.log("Division = "+((num2 == 0) ? ("Division by zero not possible!!"): ((num2*(1.0))/num1)));
                 }
                 inp.close();
            });
        });
    });

}