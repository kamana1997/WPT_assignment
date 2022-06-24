export default function TableRow(props){
    return(
        <tr>
			<td>{props.fruit.fruitName}</td>
			<td>{props.fruit.rate}</td>
			<td>{props.fruit.qty}</td>
		</tr>
    );
}