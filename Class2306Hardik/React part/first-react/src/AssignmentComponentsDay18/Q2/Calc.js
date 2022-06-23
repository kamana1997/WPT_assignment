import {useState} from "react"

export default function Calc() {
    var [result,setResult] = useState(0);

    var calculate = function (event) {
        event.preventDefault();
        var num1 = parseInt(event.target.num1.value);
        var num2 = parseInt(event.target.num2.value);
        var opr = event.target.opr.value;
        var x = 0;
        switch (opr) {
            case 'add': x = num1 + num2;
                break;
            case 'sub': x = ((num1 >= num2) ? (num1 - num2) : (num2 - num1));
                break;
            case 'mul': x = num1 * num2;
                break;
            case 'divi': x = ((num2 == 0) ? ("NAHI HOGA") : ((num1 * 1.0) / num2));
                break;
        }
        setResult(x);
    }
    return (
        <div>
            <form onSubmit={calculate}>
                <input type="number" name="num1" placeholder="Enter Num1" />
                <br />
                <input type="number" name="num2" placeholder="Enter Num2" />
                <br />
                <input type="radio" name="opr" value="add" />Addition
                <input type="radio" name="opr" value="sub" />Subtraction
                <input type="radio" name="opr" value="mul" />Multiplication
                <input type="radio" name="opr" value="divi" />Division
                <br />
                <button>Submit</button>
                <br />
                <h1>Current Result = {result}</h1>
            </form>
        </div>
    );
}