var http = require("http");

var server = http.createServer(function(req,res){
    res.write("This is data from server");
    res.end();
});

server.listen(8000,function(){
    console.log("Server Up & Running on 8000 port");
});