var arr = [1,2,3,4,5,6,7,8,9];
var newArr = arr.filter(item => item>2);
var newArr1 = arr.map(function(item){
    return item * item;
});
console.log(newArr);
console.log(newArr1);

