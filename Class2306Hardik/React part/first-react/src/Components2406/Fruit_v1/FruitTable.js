export default function FruitTable(props){
    return(
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Fruit Name</th>
                    <th>Rate</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => 
                    <tr>
                        <td>{item.fruit_name}</td>
                        <td>{item.rate}</td>
                        <td>{item.quantity}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}