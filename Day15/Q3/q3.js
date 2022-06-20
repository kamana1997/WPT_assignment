var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res) => {
    if(req.url == "/register.html"){
        fs.readFile("register.html",(err,data) => {
            res.write(data);
            res.end();
        });
    }else{
        res.write("Error 404 File Not Found!");
        res.end();
    }
});

server.listen(8000,function(){
    console.log("Server is up & running on 8000");
});