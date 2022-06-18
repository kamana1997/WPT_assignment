var readLine = require("readline");

var inp = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

var fruits = [];

var i = 0;

function fruit_input(){
    inp.question("Enter fruit name: \n",function(fruit_name){
        fruits.push(fruit_name);
        i++;
        if(i == 5){
            inp.close();
            console.log(fruits);
        }else{
            fruit_input();
        }
    })
}
fruit_input();
