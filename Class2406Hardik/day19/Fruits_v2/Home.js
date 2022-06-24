import "./Style.css";
import AddFruit from "./AddFruit";
import FruitTable from "./FruitTable";
import {useState} from "react";

export default function Home(){

    var[fruits, setFruits] = useState([]);
    var saveFruit = (data) => {
        setFruits([...fruits,data]);
    }

    return(
        <div className="container-fluid">
            <div className="row justify-content-around align-items-center" style={{height:"98vh"}}>
                <div className="col-4 p-5 shadow"> 
                    <AddFruit save={saveFruit}/>
                </div>
                <div className="col-5">
                    <FruitTable data={fruits}/>
                </div>
            </div>
        </div>
    );
}