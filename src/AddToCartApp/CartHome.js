import { Col, Row } from "react-bootstrap";
import Cart from "./Cart";
import useCartContext from "../contexts/CartContext";
import CartSummery from "./CartSummery";

function CartHome() {
    const { mobiles, selectedMobiles } = useCartContext();

    return (
        <>
            <Row style={{ marginBottom: '15px' }}>
                <Col><h1>Mobile Store</h1></Col>
            </Row>

            <Row style={{ padding: '5px' }}>
                <Col>
                    <Row>
                        {
                            mobiles.map((item, index) => {
                                return (
                                    <Col key={index} xs={3} sm={3} md={3} lg={3} xl={3} style={{ marginBottom: '15px' }}>
                                        <Cart index={index} price={12000} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                {
                    selectedMobiles.length > 0 ? (
                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                            <CartSummery />
                        </Col>
                    ) : null
                }
            </Row>
        </>
    );
}

export default CartHome;