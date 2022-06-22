var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("Its root path");
});

app.get("/users", (req,res) => {
    res.send("This is users path");
});

app.get("/data", (req,res) => {
    res.send("This is data");
});

app.listen(8000, () => {
    console.log("Server running on 8000");
})
