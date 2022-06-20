
//TO-DO

var fs = require("fs");
var i = 1;
var str = "";
function write_table_line() {
    str = (i*2) + "\n";
    i++;
    fs.appendFile("demo.txt",str,function(err){
        if (!err){
            if(i<10){
                write_table_line();
            }else{
                console.log("Table Done");
            }
        }else{
            console.log("Unable to write the data");
        }
    });
}