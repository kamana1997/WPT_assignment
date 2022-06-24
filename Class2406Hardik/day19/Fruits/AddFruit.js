import{useState} from "react"
import FruitList from "./FruitList";

export default function AddFruit(){
    
    var [fruits, setFruits] = useState([]);

    var saveFruit = function(event){
        event.preventDefault();
        var fruitName = event.target.fruitName.value;
        document.getElementById("fruitName").value="";
        setFruits([...fruits, fruitName]);
    }

    return(
        <div>
            <form onSubmit={saveFruit}>
                <input type="text" name="fruitName" id="fruitName" placeholder="Enter Fruit Name"></input>
                <button>SAVE</button>
            </form>
            <br />
            <FruitList data ={fruits} />
        </div>
    );
}