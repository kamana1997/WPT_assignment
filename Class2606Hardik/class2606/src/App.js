import First from "./Redux_Demo/First";
import { Provider } from "react-redux"
import store from "./Redux_Demo/Store"
function App(){
  return(
    <div>
      <Provider store={store}>
      <First/>
      </Provider>

    </div>
  );
}


export default App;