import { Button } from "react-bootstrap";
import useCartContext from "../contexts/CartContext";

function Cart({ index }) {
    let { mobiles, selectedMobiles, setSelectedMobiles } = useCartContext();

    function addToCart() {
        setSelectedMobiles([...selectedMobiles, mobiles[index]]);
    }

    return (
        <div className="cart">
            <img src={mobiles[index].img} alt="" style={{ width: '150px', height: '150px' }}></img>
            <br></br>
            <span>Model: {mobiles[index].model}</span>
            <br></br>
            <span>Price: {mobiles[index].price}</span>
            <br></br>
            <Button onClick={addToCart}>Add To Cart</Button>
        </div>
    );
}

export default Cart;