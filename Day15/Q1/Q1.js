var fs = require("fs");

var sum = 0;

fs.readFile("numberInput.txt",function(err,data){
    var dataInput = data.toString().split("\n");
    for(var i=0;i<dataInput.length;i++){
        sum += parseInt(dataInput[i]);
    }

    sum = sum.toString();

    fs.appendFile("numberOutput.txt",sum,(err) => {
        if(!err){
            console.log("Done");
        }
    })
})