var fs = require("fs");


exports.table = function(){
    for(var i = 1; i<=10 ; i++){
        var str = "2 * "+i+ " = "+(2*i) +"\n";
        if(i == 1){
        fs.writeFileSync("question3.txt",str);
        }else{
            fs.appendFileSync("question3.txt",str);
        }
    }
}