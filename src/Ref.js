import { useRef } from "react";
import { Button, Col, Row } from "react-bootstrap";

function Ref() {

    let count = useRef(0);

    function increaseCount() {
        startTicks();
    }

    function startTicks() {
        count.current.innerText = Number(count.current.innerText) + 1;
    }

    return (
        <>
            <h1>useRef Explained!</h1>
            <h4>Official Doc: <a target="blank" href="https://react.dev/reference/react/useRef">Go To Official Doc.</a></h4>
            <h3>Key Points: </h3>
            <ol style={{ marginLeft: "20%", textAlign: "left" }}>
                <li style={{ fontWeight: 600, color: "#555a64" }}>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Referencing a value with a ref.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Manipulating the DOM with a ref.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Avoiding recreating the ref contents.</li>
            </ol>
            <hr></hr>
            <Row>
                <Col></Col>
                <Col>
                    <div style={{ padding: '45px', backgroundColor: '#E49B0F' }}>
                        <h1 style={{ fontWeight: 900, color: '#202A44', letterSpacing: 5 }} ref={count}>0</h1>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <br></br>
            <Button onClick={increaseCount}>Click Me</Button>
        </>
    );
}

export default Ref;