import Second from "./Second";
import { Provider } from "react-redux"
import store from "./Store"

export default function First() {
    return (
        <Provider store={store}>
            <div>
                <input type="text" placeholder="Enter Name" name="name" />
                <br />
                <Second />
            </div>
        </Provider>

    );
}
