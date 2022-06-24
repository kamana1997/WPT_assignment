import {useState} from "react";
import GenerateList from "./GenerateList"

export default function FruitList(){
    var [fruits,setFruits] = useState([]);

    var getFruitList = function(event){
        var fruit = event.target.value;
        setFruits([...fruits,fruit]);
        console.log(fruits);
    }

    return(
        <div>
            <input onBlur={getFruitList} type="text" name="name" placeholder="Enter Fruit Ka Naam"/>
            <GenerateList x={fruits} />
        </div>
    );
}