import { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import Even from "./Even";
import Odd from "./Odd";

function LiftingStateUp() {

    const [bucket, setBucket] = useState({ apples: 100, even: 0, odd: 0, toss: null, isEating: false });
    const [history, setHistory] = useState([]);

    function toss() {
        const min = 1;
        const max = bucket.apples >= 10 ? 10 : bucket.apples;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setBucket({ ...bucket, toss: randomNumber, isEating: true });
    }

    function setStateForEvenOdd(apples) {
        let remainingApples = (bucket.apples - apples);
        let updatedEven = (apples % 2 === 0 ? bucket.even + apples : bucket.even);
        let updatedOdd = (apples % 2 !== 0 ? bucket.odd + apples : bucket.odd);
        setBucket({
            ...bucket,
            isEating: false,
            apples: remainingApples,
            toss: null,
            even: updatedEven,
            odd: updatedOdd
        });

        if (remainingApples === 0 && updatedEven === updatedOdd) {
            setHistory([...history, 'Both Even And Odd Won The Game!']);
        } else if (remainingApples === 0 && updatedEven > updatedOdd) {
            setHistory([...history, 'Even Won The Game!']);
        } else if (remainingApples === 0 && updatedOdd > updatedEven) {
            setHistory([...history, 'Odd Won The Game!']);
        }
    }

    return (
        <div>
            <h1>React Lifting State Up Explained!</h1>
            <h4>Official Doc: <a target="blank" href="https://react.dev/learn/sharing-state-between-components">Go To Official Doc.</a></h4>
            <h3>Key Points: </h3>
            <ol style={{ marginLeft: "20%", textAlign: "left" }}>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Sharing State Between Components.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and its one of the most common things you will do writing React code.</li>
            </ol>
            <hr></hr>
            <br></br>
            <h3>Before Lifting State Up: </h3>
            <img src="/beforeLifting.png" alt="React Life Cycle" height={400} width={800}></img>
            <h3>After Lifting State Up: </h3>
            <img src="/afterLifting.png" alt="React Life Cycle" height={400} width={800}></img>
            <hr></hr>
            <br></br>
            <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '28px', fontWeight: 'bold' }}>Sharing Apple Between Siblings!</span > <Button variant="info" onClick={() => setBucket({ apples: 100, even: 0, odd: 0, toss: null, isEating: false })}>Restart!</Button>
            </div>
            <Row style={{ backgroundColor: '#212529', width: '50%', marginLeft: '25%', paddingTop: '10px', paddingBottom: '10px' }}>
                <Col style={{ fontSize: '18px', color: "yellow", fontWeight: "bold" }}>Even Eaten : {bucket.even}</Col>
                <Col style={{ fontSize: '18px', color: "#0dcaf0", fontWeight: "bold" }}>Total Apples: {bucket.apples}</Col>
                <Col style={{ fontSize: '18px', color: "yellow", fontWeight: "bold" }}>Odd Eaten : {bucket.odd}</Col>
            </Row>
            <br></br>
            <div style={{ backgroundColor: '#212529', width: '50%', marginLeft: '25%', paddingTop: '10px', paddingBottom: '10px' }}>
                {!bucket.isEating && bucket.apples > 0 ? <Button variant="info" onClick={toss}>Make A Toss</Button> : ''}
                {bucket.toss !== null && bucket.isEating && bucket.apples > 0 ? (bucket.toss % 2 === 0 ? <span style={{ color: "yellow" }}>Even Own {bucket.toss} apples</span> : <span style={{ color: "yellow" }}>Odd Own {bucket.toss} apples</span>) : ''}
                {bucket.apples === 0 ? (<span style={{ color: "yellow", fontSize: '18px', fontWeight: 'bold' }}>{bucket.even > bucket.odd ? 'Even' : bucket.even === bucket.odd ? 'Both Even And Odd' : 'Odd'} Won The Game!</span>) : ''}
            </div>
            <br></br>
            <Row>
                <Col>
                    <Even isEating={bucket.toss !== null && bucket.toss % 2 === 0} apples={bucket.toss} setStateForEvenOdd={setStateForEvenOdd} />
                </Col>
                <Col>
                    <Odd isEating={bucket.toss !== null && bucket.toss % 2 !== 0} apples={bucket.toss} setStateForEvenOdd={setStateForEvenOdd} />
                </Col>
            </Row>

            <br></br>

            <Row>
                <Col></Col>
                <Col>
                    <Table striped bordered variant="dark">
                        <thead>
                            <tr>
                                <th style={{ color: 'yellow', fontWeight: 'bold', fontSize: '20px' }}>History</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                history.length > 0 ? (
                                    history.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td style={{ color: 'yellow', fontWeight: 'bold', fontSize: '20px' }}>{item}</td>
                                            </tr>
                                        )
                                    })
                                ) : <tr><td style={{ color: 'yellow', fontWeight: 'bold', fontSize: '20px' }}>No History Found!</td></tr>
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col></Col>
            </Row>
        </div >
    );
}

export default LiftingStateUp;