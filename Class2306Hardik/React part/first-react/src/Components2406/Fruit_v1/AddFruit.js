//Importing css
import "./Style.css"
import FruitTable from "./FruitTable";
import {useState} from "react"

export default function Addfruit(){
    
    var [fruits,setFruits] = useState([]);
    var saveFruit = (e) => {
        e.preventDefault();
        var temp = {
            fruit_name : e.target.name.value,
            rate : e.target.rate.value,
            quantity : e.target.quantity.value
        }
        setFruits([...fruits,temp])
    }

    return(
        <div className = "container-fluid">
            <div className="row justify-content-around align-items-center" style={{height:"98vh"}}>
                <div className="col-4 p-5 shadow">
                    <form onSubmit={saveFruit}>
                        <div className="mb-3">
                            <input type="text" name="name" className="form-control" placeholder="Enter Fruit Name" />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="rate" className="form-control" placeholder="Enter Rate" />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="quantity" className="form-control" placeholder="Enter Quantity" />
                        </div>
                        <div className="mb-3" style={{textAlign:"center"}}>
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
                <div className="col-6">
                    <FruitTable data={fruits} />
                </div>
            </div>
        </div>
    );
}