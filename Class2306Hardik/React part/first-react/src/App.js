//dont change name App keep it default (recommendation)
//import Hello from "./Components/Hello"
// import Calc from "./CalcComponents/Calc"
// import List from "./Components/List"
import NameList from "./ListApp/NameList"

function App(){
  var name = "Hardik Agarwal";
  return(
    //here we will write our html code with one tag
    <div>
      {/*<h1>Good Morning {name} </h1>
      <Hello/>
  <Hello></Hello>*/}
      {/* <Calc /> */}
      {/* <List /> */}
      <NameList />
    </div>
  );
}

export default App;