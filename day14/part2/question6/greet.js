exports.greet = function(){
    var date = new Date();
    var d = date.getHours();
    if(d >= 0 && d < 12){
        console.log("Good Morning!!");
        return;
    }
    if(d == 12){
        console.log("Good Noon!!");
        return;
    }

    if(d > 12 && d <= 16){
        console.log("Good Afternoon!!");
        return;
    }
    if(d > 16){
        console.log("Good Evening!!");
        return;
    }



}