import { useMemo, useState } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";

function UseMemo() {
  let [airSearching, setAirSearching] = useState(false);
  let [trainSearching, setTrainSearching] = useState(false);

  let [airState, setAirState] = useState({ airAvlTickets: [], airTracker: 0 });
  let [traintState, setTrainState] = useState({ trainAvlTickets: [], trainTracker: 0 });

  const airTickets = [
    { from: 'From Dest 1', to: 'To Dest 1', departure: '18-Nov-2023 1:30 pm', arrival: '18-Nov-2023 10:30 pm' },
    { from: 'From Dest 2', to: 'To Dest 2', departure: '18-Nov-2023 2:30 pm', arrival: '18-Nov-2023 9:30 pm' },
    { from: 'From Dest 3', to: 'To Dest 3', departure: '18-Nov-2023 3:30 pm', arrival: '18-Nov-2023 8:30 pm' },
    { from: 'From Dest 4', to: 'To Dest 4', departure: '18-Nov-2023 4:30 pm', arrival: '18-Nov-2023 7:30 pm' },
    { from: 'From Dest 5', to: 'To Dest 5', departure: '18-Nov-2023 5:30 pm', arrival: '18-Nov-2023 6:30 pm' },
    { from: 'From Dest 6', to: 'To Dest 6', departure: '18-Nov-2023 6:30 pm', arrival: '18-Nov-2023 5:30 pm' },
    { from: 'From Dest 7', to: 'To Dest 7', departure: '18-Nov-2023 7:30 pm', arrival: '18-Nov-2023 4:30 pm' },
    { from: 'From Dest 8', to: 'To Dest 8', departure: '18-Nov-2023 8:30 pm', arrival: '18-Nov-2023 3:30 pm' },
    { from: 'From Dest 9', to: 'To Dest 9', departure: '18-Nov-2023 9:30 pm', arrival: '18-Nov-2023 2:30 pm' },
    { from: 'From Dest 10', to: 'To Dest 10', departure: '18-Nov-2023 10:30 pm', arrival: '18-Nov-2023 1:30 pm' }
  ];

  const trainTickets = [
    { from: 'From Dest 11', to: 'To Dest 11', departure: '18-Nov-2023 1:30 pm', arrival: '18-Nov-2023 10:30 pm' },
    { from: 'From Dest 12', to: 'To Dest 12', departure: '18-Nov-2023 2:30 pm', arrival: '18-Nov-2023 9:30 pm' },
    { from: 'From Dest 13', to: 'To Dest 13', departure: '18-Nov-2023 3:30 pm', arrival: '18-Nov-2023 8:30 pm' },
    { from: 'From Dest 14', to: 'To Dest 14', departure: '18-Nov-2023 4:30 pm', arrival: '18-Nov-2023 7:30 pm' },
    { from: 'From Dest 15', to: 'To Dest 15', departure: '18-Nov-2023 5:30 pm', arrival: '18-Nov-2023 6:30 pm' },
    { from: 'From Dest 16', to: 'To Dest 16', departure: '18-Nov-2023 6:30 pm', arrival: '18-Nov-2023 5:30 pm' },
    { from: 'From Dest 17', to: 'To Dest 17', departure: '18-Nov-2023 7:30 pm', arrival: '18-Nov-2023 4:30 pm' },
    { from: 'From Dest 18', to: 'To Dest 18', departure: '18-Nov-2023 8:30 pm', arrival: '18-Nov-2023 3:30 pm' },
    { from: 'From Dest 19', to: 'To Dest 19', departure: '18-Nov-2023 9:30 pm', arrival: '18-Nov-2023 2:30 pm' },
    { from: 'From Dest 20', to: 'To Dest 20', departure: '18-Nov-2023 10:30 pm', arrival: '18-Nov-2023 1:30 pm' }
  ];

  function searchTrainTickets() {
    setTrainSearching(true);

    let tempList = trainTickets
      .filter((item, index) => (traintState.trainTracker === 0 ? index % 2 === 0 : index % 2 !== 0));

    setTimeout(() => {
      setTrainSearching(false);

      setTrainState({ ...traintState, trainAvlTickets: tempList, trainTracker: traintState.trainTracker === 0 ? 1 : 0 });
    }, 5000);
  }

  function searchAirTickets() {
    setAirSearching(true);

    let tempList = airTickets
      .filter((item, index) => (airState.airTracker === 0 ? index % 2 === 0 : index % 2 !== 0));

    setTimeout(() => {
      setAirSearching(false);

      setAirState({ ...airState, airAvlTickets: tempList, airTracker: airState.airTracker === 0 ? 1 : 0 });
    }, 5000);
  }

  const trainMemo = useMemo(() => {
    console.log('Train Book Btn');

    if (traintState.trainAvlTickets.length > 0) {
      let startTime = performance.now();
      while (performance.now() - startTime < 500) {
        // Make Delay!
      }
    }

    return (<td><Button onClick={() => alert('Ticket Booked!')}>Book</Button></td>)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [traintState]);

  const airMemo = useMemo(() => {
    console.log('Air Book Btn');

    if (airState.airAvlTickets.length > 0) {
      let startTime = performance.now();
      while (performance.now() - startTime < 500) {
        // Make Delay!
      }
    }

    return (<td><Button onClick={() => alert('Ticket Booked!')}>Book</Button></td>)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [airState]);

  return (
    <>
      <h1>React useMemo Explained!</h1>
      <h4>Official Doc: <a target="blank" href="https://react.dev/reference/react/useMemo">Go To Official Doc.</a></h4>
      <h3>Key Points: </h3>
      <ol style={{ marginLeft: "20%", textAlign: "left" }}>
        <li style={{ fontWeight: 600, color: "#555a64" }}>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</li>
        <li style={{ fontWeight: 600, color: "#555a64" }}>Skipping expensive recalculations.</li>
        <li style={{ fontWeight: 600, color: "#555a64" }}>Skipping re-rendering of components.</li>
        <li style={{ fontWeight: 600, color: "#555a64" }}>Memoizing a dependency of another Hook.</li>
        <li style={{ fontWeight: 600, color: "#555a64" }}>Memoizing a function.</li>
      </ol>
      <hr></hr>
      <h1>Check Available Tickets For Booking!</h1>
      <Row>
        {/* Train Ticket Checking */}
        <Col>
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <td colSpan={5}>
                  <h4 style={{ color: '#0dcaf0' }}>Check Available Ticket For Train</h4>
                </td>
              </tr>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                !trainSearching ? (
                  traintState.trainAvlTickets.length > 0 ? (
                    traintState.trainAvlTickets.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.from}</td>
                          <td>{item.to}</td>
                          <td>{item.departure}</td>
                          <td>{item.arrival}</td>
                          {trainMemo}
                        </tr>
                      )
                    })
                  ) : (<tr><td colSpan={5}>No Available Ticket Found!</td></tr>)
                ) : (<tr><td colSpan={5}>Searching...</td></tr>)
              }
              <tr>
                <td></td>
                <td colSpan={3}>
                  <Button disabled={trainSearching} variant="info" onClick={() => searchTrainTickets()}>Search Train Tickets</Button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>

        {/* Air Ticket Checking */}
        <Col>
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <td colSpan={5}>
                  <h4 style={{ color: '#0dcaf0' }}>Check Available Ticket For Air</h4>
                </td>
              </tr>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                !airSearching ? (
                  airState.airAvlTickets.length > 0 ? (
                    airState.airAvlTickets.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.from}</td>
                          <td>{item.to}</td>
                          <td>{item.departure}</td>
                          <td>{item.arrival}</td>
                          {airMemo}
                        </tr>
                      )
                    })
                  ) : (<tr><td colSpan={5}>No Available Ticket Found!</td></tr>)
                ) : (<tr><td colSpan={5}>Searching...</td></tr>)
              }
              <tr>
                <td></td>
                <td colSpan={3}>
                  <Button disabled={airSearching} variant="info" onClick={searchAirTickets}>Search Air Tickets</Button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row >
    </>
  );
}

export default UseMemo;