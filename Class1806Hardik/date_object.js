//part of js
//creating object fro current date

var d = new Date();
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getDate());

var my_dob = new Date(1999,07,17); //yyyy-mm-dd note mm strarts with 0
console.log(my_dob.toDateString());