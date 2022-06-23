import {useState} from "react"
function Calc(){
    //var result = 0;
    var [result,setResult] = useState(0);
    var calculate = function (event){
        event.preventDefault(); //stops form default action
        var num1 = event.target.num1.value;
        var num2 = event.target.num2.value;

        var x = parseInt(num1) + parseInt(num2);
        console.log(x);

        //Setting the value to result state variable
        setResult(x);
    }
    return(
        <div>
            <form onSubmit={calculate}>
            <input type = "text" name = "num1" placeholder="Enter Number"/>
            <input type = "text" name = "num2" placeholder="Enter Number"/>
            <button>Calculate</button>
            </form>
            {/*Here we are fetching the value of result state variable*/}
            <h3>Result is {result}</h3>
        </div>
        
    );
}

export default Calc;