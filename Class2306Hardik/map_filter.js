var arr = [1,2,3,4,5,6,7,8,9];
var newArr = arr.filter(item => item>2);
var newArr1 = arr.map(function(item){
    return item * item;
});
console.log(newArr);
console.log(newArr1);
//spread operator ...

var arr = [1,2,3]
var new_arr = [...arr,89,4,67]
console.log(new_arr);

var arr = ['a','r','s'];
var new_arr = ['Neha',...arr];
console.log(new_arr);