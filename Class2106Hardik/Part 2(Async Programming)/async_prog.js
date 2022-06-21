// async is the keyword use tp create asynchronous func
// just add async ahead of all the traditional function formats
var fs = require("fs");
async function fetch_data(){
    return fs.readFileSync("demo.txt").toString()
}

var x = fetch_data();
// X has promise in it now

console.log(x);

//then is used to accesss data again async call
x.then((data) => console.log(data)).catch((err) => console.log(err));