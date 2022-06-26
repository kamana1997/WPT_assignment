import Second from "./Second";
import { useDispatch } from "react-redux";
import {add} from "./FruitNameSlice"

export default function First() {
    var dispatch = useDispatch();
    var handleBlur = (e) => {
        dispatch(add(e.target.value))
    }
    return (
        
            <div>
                <input type="text" placeholder="Enter Name" name="name" onBlur={handleBlur} />
                <br />
                <Second />
            </div>

    );
}
