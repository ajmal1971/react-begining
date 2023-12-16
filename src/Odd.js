import { useState } from "react";
import { Button } from "react-bootstrap";

function Odd({ isEating, apples, setStateForEvenOdd }) {
    let [lastValue, setLastValue] = useState('');

    function onFinishEating() {
        setLastValue('Odd Finished Eating ' + apples + ' apples!');
        setStateForEvenOdd(apples);
    }

    return (
        <div style={{ backgroundColor: '#212529', marginLeft: '12%', paddingTop: '10px', paddingBottom: '10px', color: "yellow" }}>
            <h3>Odd</h3>
            {
                isEating ? (
                    <>
                        <h4>Odd is eating {apples} apples</h4>
                        <Button variant="info" onClick={onFinishEating}>Finish Eating</Button>
                    </>
                ) : (
                    <h4>{lastValue}</h4>
                )
            }
        </div >
    );
}

export default Odd;