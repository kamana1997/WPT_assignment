var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    console.log(req.url);
    if(req.url == "/calc.html"){
        fs.readFile("calc.html", (err,data) => {
            if(!err){
                res.write(data);
                res.end();
            }
        });
    }else if(req.url.startsWith("/calc")){
        var queryString = req.url.split("?");
        var data = new URLSearchParams(queryString[1]);
        console.log(data);
        var sum = parseInt(data.get("num1")) + parseInt(data.get("num2"));
        res.write("Sum = " + sum);
        res.end();
    }else{
        res.write("Error 404 Not Found");
        res.end();
    }
});

server.listen(8000, () => {
    console.log("Server is running at 80000");
});