export default function AddFruit(props){
    
    var handleSubmit = (e) => {
        e.preventDefault();
        var temp = {
            fruitName : e.target.fruitName.value,
            rate : e.target.rate.value,
            quantity : e.target.quantity.value
        }
        props.save(temp);
    };
    
    return(
        <form onSubmit={handleSubmit}>
	 		<div className="mb-3">
	 			<input type="text" name="fruitName" className="form-control" placeholder="Fruit Name"/>
			</div>
 			<div className="mb-3">
	 			<input type="text" name="rate" className="form-control" placeholder="Rate"/>
	 		</div>
	 		<div className="mb-3">
				<input type="text" name="quantity" className="form-control" placeholder="Quantity"/>
 			</div>
	 		<div className="mb-3" style={{textAlign:"center"}}>
	 			<button className="btn btn-primary">SAVE</button>
			</div>
		 </form>
    );
}