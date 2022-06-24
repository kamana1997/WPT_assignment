import TableRow from "./TableRow";

export default function FruitTable(props){
    return(
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Fruit Name</th>
                    <th>Fruit Rate</th>
                    <th>Fruit Quantity</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => 
                    <TableRow fruit={item}/>
                )}
            </tbody>
        </table>
    );
}