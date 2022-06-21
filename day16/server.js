var http = require("http");
var fs = require("fs");

function editCalc(result){
    var oldPage = fs.readFileSync("Public/calc.html");
    fs.writeFileSync("Public/calc_old.html",oldPage);


    var newPage = fs.readFileSync("Public/newCalc.txt").toString();
    newPage += result.toString();
    newPage += fs.readFileSync("Public/newCalc1.txt").toString();
    fs.writeFileSync("Public/calc.html",newPage);
}


var server = http.createServer((req,res) => {
    
    if(req.url.endsWith(".html")){
        
        fs.readFile("Public/" + req.url, (err,data) => {
            if(err){
                res.write("Error! 404 Page Not Found");
                res.end();
            }
            res.write(data);
            res.end();
        });

    }else if(req.url.startsWith("/calc")){
        
        var urlStr = req.url.substring(1);
        var queryParam = urlStr.split("?");
       
        console.log(queryParam);

        var data = new URLSearchParams(queryParam[1]);
        
        var num1 = parseInt(data.get("num1"));
        var num2 = parseInt(data.get("num2"));
        var opr = data.get("opr");

        var result = 0;
        var str = "";
        switch(opr){
            case 'add': result = num1 + num2;
                        break;
                
            case 'sub': result = ((num1>=num2) ? (num1 - num2) : (num2-num1));
                        break;
                
            case 'mul': result = num1 * num2;
                        break;

            case 'divi': result = ((num2 == 0) ? (str = "NAHI HOGA") : ((num1*1.0)/num2));
                        break;
                
            default : str = "Bhag Ja Yahn Se!"
                        break;
        }

        editCalc(result);
        fs.readFile("Public/calc.html",(err,data) => {

            if(!err){
                res.write(data);
                res.end();
            }else{
                res.write("Error! 500 Internal Server Error.")
        res.end();
            }

        });
       
    }else{
        res.write("Error! 404 Not Found.")
        res.end();
    }
});

server.listen(8000,() => {
    console.log("Server is up and running at 8000");
});