import { useState } from "react";
import { Button } from "react-bootstrap";

export default function HOCCounter(props) {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1 style={{ color: props.color }}>You Clicked Counter Button {counter} Times!</h1>
            <Button onClick={() => setCounter(counter + 1)}>Increase Counter</Button>
        </>
    );
}