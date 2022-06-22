var express = require("express");
var app = express();
var port = 8000;


app.use(express.static("Public"));

app.get("/calc",(req,res) => {
    var reqData = req.query;

    var num1 = parseInt(reqData.num1);
    var num2 = parseInt(reqData.num2);
    var opr = reqData.opr;

    switch(opr){
        case 'add': result = num1 + num2;
                    break;
            
        case 'sub': result = ((num1>=num2) ? (num1 - num2) : (num2-num1));
                    break;
            
        case 'mul': result = num1 * num2;
                    break;

        case 'divi': result = ((num2 == 0) ? ( "NAHI HOGA") : ((num1*1.0)/num2));
                    break;

    }

    res.send(result.toString());

});

app.listen(port,() => {
    console.log(`Server running on ${port}`);
});