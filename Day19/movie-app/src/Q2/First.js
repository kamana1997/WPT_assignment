import {useState} from "react";
import Second from "./Second";
import { NameContext } from "./NameContext";

export default function First(){

    var [name, setName] = useState("");
    var handleBlur = function(e){
        setName(e.target.value);
    }

    return(
        <NameContext.Provider value={name}>
            <div>
                <input type="text" name="name" placeholder="Enter Name" onBlur={handleBlur}></input>
                <br />
                <Second />
            </div>
        </NameContext.Provider>
    );
}