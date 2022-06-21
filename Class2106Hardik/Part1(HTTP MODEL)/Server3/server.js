var http = require("http");
var fs = require("fs");

var server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url.endsWith(".html")){
        var fileName = req.url.substring(1);
        fs.readFile("Files/"+fileName,(err,data) => {
            if(!err){
                res.write(data);
                res.end();
            }else{
                res.write("Page Not Found");
                res.end();
            }
        });
    }else{
        res.write("Error! 404 Not Found.")
        res.end();
    }
});

server.listen(8000,() => {
    console.log("Server is running at 8000");
});