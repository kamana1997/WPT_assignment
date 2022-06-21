var fs = require("fs");

async function fetch_data(){
    var data = fs.readFileSync("demo.txt");
    return data.toString();
}

async function caller(){
    // Note: await should always be inside a async function.
    var x = await fetch_data();
    console.log(x.toUpperCase());
}

caller();