import { useContext } from "react";
import { NameContext } from "./NameContext";

export default function Fourth(){
    // Here accessing data from Context

    var data = useContext(NameContext);

    return(
        <div>
            This is Fourth Component
            <br />
            <h4>I am accessing {data} in fourth component</h4>
        </div>
    );
}