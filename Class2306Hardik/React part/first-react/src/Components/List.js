export default function List(){
    var fruit_name = ["Apple","Banana","Mango"];
    return(
        <div>
            <ol>
                {fruit_name.map((item) => {
                    return <li key={item.toString()}>{item}</li>
                })}
            </ol>
        </div>
    );
}