//dont change name App keep it default (recommendation)
//import Hello from "./Components/Hello"
import Calc from "./CalcComponents/Calc"
function App(){
  var name = "Hardik Agarwal";
  return(
    //here we will write our html code with one tag
    <div>
      {/*<h1>Good Morning {name} </h1>
      <Hello/>
  <Hello></Hello>*/}
      <Calc />
    </div>
  );
}

export default App;