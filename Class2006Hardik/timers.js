// // This function execute the call back after set time that is 3sec
// // async function
// setTimeout(function(){
//     // callback function
//     console.log("Executed after 3 sec");
// },3000);

// // This executes call back after evry three seconds infinite times
// setInterval(function(){
//     // callback function
//     console.log("Set Interval");
// },3000);


var timeVar = setInterval( () => {
    console.log("Hi");
},2000);

setTimeout(() => {
    clearInterval(timeVar);
},10000);


//immediately calls callback fucntion
setImmediate(function(){
    console.log("Set Immediate");
});