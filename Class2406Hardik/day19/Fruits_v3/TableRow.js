import AddToCart from "./AddToCart";

export default function TableRow(props){
    return(
        <tr>
			<td>{props.fruit.fruitName}</td>
			<td>{props.fruit.rate}</td>
			<td>{props.fruit.quantity}</td>
			<td><AddToCart fruit={props.fruit}/></td>
		</tr>
    );
}