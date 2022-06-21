var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res) => {
    if(req.url.endsWith(".html")){
        var urlStr = req.url.substring(1);
        if(urlStr == "calc.html"){

        }else{
            fs.readFile("Public/" + urlStr, (err,data) => {
                if(!err){
                    res.write(data);
                    res.end();
                }
            } );
        }
        
    }else{
        res.write("Error! 404 Not Found.")
        res.end();
    }
});

server.listen(8000,() => {
    console.log("Server is up and running at 8000");
});