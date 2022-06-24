import "./Style.css";
import FruitTable from "./FruitTable";
import {useState} from "react";

export default function AddFruit(){
    
    var [fruits, setFruits] = useState([]);
    var saveFruit = (e) => {
        e.preventDefault();
        var temp = {
            fruitName : e.target.fruitName.value,
            rate : e.target.rate.value,
            qty : e.target.qty.value
        }
        setFruits([...fruits,temp]);
    }

    return(
        <div className ="container-fluid">
            <div className="row justify-content-around align-items-center" style={{height : "98vh"}}>
                <div className="col-4 p-5 shadow">
                    <form onSubmit={saveFruit}>
                        <div className="mb-3">
                            <input type="text" name="fruitName" className="form-control" placeholder="Enter Fruit Name"></input>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="rate" className="form-control" placeholder="Enter Fruit Rate"></input>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="qty" className="form-control" placeholder="Enter Fruit Qty"></input>
                        </div>
                        <div className="mb-3" style={{textAlign:"center"}}>
                            <button className="btn btn-primary">SAVE</button>
                        </div>
                    </form>
                </div>
                <div className="col-5">
                    <FruitTable data={fruits}/>
                </div>
            </div>
        </div>
    );
}