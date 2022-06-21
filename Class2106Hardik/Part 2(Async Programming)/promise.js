var fs = require("fs");


var x = new Promise((resolve,reject) => {
    var data = fs.readFileSync("demo.txt").toString();
    if(data){
        resolve(data);
    }else{
        reject("No data");
    }
})

x.then((data) => console.log(data)).catch((err) => console.log(err));