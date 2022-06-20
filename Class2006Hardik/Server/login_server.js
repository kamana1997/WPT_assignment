var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    if(req.url == "/login.html"){
        fs.readFile("login.html",function(err,data){
            res.write(data);
            res.end();
        });
    }
    else if(req.url == "/users"){
        res.write("page under dev");
        res.end();
    }else{
        res.write("Invalid Path");
        res.end();
    }
});

server.listen(8000,function(){
    console.log("server running at 8000.")
});