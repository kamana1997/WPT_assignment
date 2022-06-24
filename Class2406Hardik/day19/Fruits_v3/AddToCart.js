export default function AddToCart(props){

    var addToCart = () => {
        console.log(props.fruit);
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={addToCart}>Add To Cart</button>
        </div>
    )
}