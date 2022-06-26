import { useSelector } from "react-redux";

export default function Third(){
    var fruit_name = useSelector((state) => state.fruitName.fruit_name);
    
    return(
      <div>
        <br />
        <h1>Good Morning {fruit_name}</h1>
      </div>
    );
  }