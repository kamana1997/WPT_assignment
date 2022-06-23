function Calc(){
    var calculate = function (event){
        event.preventDefault(); //stops form default action
        var num1 = event.target.num1.value;
        var num2 = event.target.num2.value;

        var result = parseInt(num1) + parseInt(num2);
        console.log(result);
    }
    return(
        <div>
            <form onSubmit={calculate}>
            <input type = "text" name = "num1" placeholder="Enter Number"/>
            <input type = "text" name = "num2" placeholder="Enter Number"/>
            <button>Calculate</button>
            </form>
        </div>
        
    );
}

export default Calc;