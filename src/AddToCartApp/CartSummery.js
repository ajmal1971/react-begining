import { Button, Table } from "react-bootstrap";
import useCartContext from "../contexts/CartContext";

function CartSummery() {
    const { selectedMobiles, setSelectedMobiles } = useCartContext();

    function removeFromCart(index) {
        setSelectedMobiles([...selectedMobiles.splice(index, )]);
    }

    return (
        <>
            <h3>Cart Summery</h3>
            <h5>Total Price: {selectedMobiles.reduce((sum, curr) => Number(sum) + Number(curr.price), 0)}</h5>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedMobiles.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.model}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Button onClick={() => removeFromCart(index)}>Remove</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}

export default CartSummery;