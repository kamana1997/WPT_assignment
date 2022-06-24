import TableRow from "./TableRow";

export default function FruitTable(props){
    return(
        <table className="table table-hover table-striped table-dark">
			<thead>
				<tr>
					<th>Fruit Name</th>
					<th>Rate</th>
					<th>Quantity</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((item)=>
					 <TableRow fruit={item}/>
				)}
			</tbody>
		</table>
    );
}