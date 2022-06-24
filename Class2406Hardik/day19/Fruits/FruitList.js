export default function FruitList(props){
    return(
        <ol>
            {props.data.map((item) => {
                return <li>{item}</li>
            })}
       </ol>
    );
}