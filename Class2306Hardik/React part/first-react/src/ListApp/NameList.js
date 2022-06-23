import {useState} from "react"

export default function NameList(){
    var [names,setNames] = useState([]);
    var handleBlur = (event) => {
        console.log(names);
        //here event got single event DOM
        var n = event.target.value;
        // use of spread operator ...
        setNames([...names,n]);
    } 

    return(
        <div>
            <input type="text" name="name" placeholder="Enter Name" onBlur={handleBlur} />
            <br />
            <ol>
                {names.map(function(item){
                    return <li key={item.toString()}>{item}</li>
                })}
            </ol>
        </div>
    );
}