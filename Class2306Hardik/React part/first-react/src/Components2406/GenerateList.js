
//props me data aa rha h
export default function GenerateList(props){
    return(
        <div>
            <ol>
                {props.x.map((item) => {
                    return <li key={item.toString()}>{item}</li>
                })}
            </ol>
        </div>
    );
}