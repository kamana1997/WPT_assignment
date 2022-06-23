import {useState} from "react";

export default function FruitList(){
    var [fruits,setFruits] = useState([]);

    var getFruitList = function(event){
        var fruit = event.target.value;
        var x = [...fruits,fruit];
        setFruits(x);
        console.log(fruits);
    }

    return(
        <div>
            <input onBlur={getFruitList} type="text" name="name" placeholder="Enter Fruit Ka Naam"/>
            <ol>
                {fruits.map((item) => {
                    return <li key={item.toString()}>{item}</li>
                })}
            </ol>
        </div>
    );
}