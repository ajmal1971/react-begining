import { useEffect, useState } from "react";

function UseEffect() {
    let [blue, setBlue] = useState(0);
    let [brown, setBrown] = useState(0);
    let [blueCalled, setBlueCalled] = useState(0);
    let [brownCalled, setBrownCalled] = useState(0);

    useEffect(() => {
        console.log('No Dependancy Use Effect Called!');
    });

    useEffect(() => {
        console.log('Blue');
        setBlueCalled(prev => prev + 1);
    }, [blue]);
    
    useEffect(() => {
        console.log('Brown');
        setBrownCalled(prev => prev + 1);
    }, [brown]);

    return (
        <div>
            <h1>React Use Effect Explained!</h1>
            <h4>Official Doc: <a target="blank" href="https://react.dev/reference/react/useEffect">Go To Official Doc.</a></h4>
            <h3>Key Points: </h3>
            <ol style={{ marginLeft: "20%", textAlign: "left" }}>
                <li style={{ fontWeight: 600, color: "#555a64" }}>useEffect is a React Hook that lets you synchronize a component with an external system.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Also it is the combination of Class Component Life Cycle Hooks like componentDidMount, componentDidUpdate, componentWillUnmount, etc.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>It is Called everytime Component is generated newly or any state/props are updated or even if the component get unmounted.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>It's call can be handled based state/props as dependency. If User pass any state/props as dependency, then useEffect will be called iif the state/prop get changed.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Multiple useEffect can be declared within same component</li>
            </ol>
            <hr></hr>
            <br></br>
            <div style={{ fontWeight: 600, color: "#555a64" }}><span>Use Effect With No Param Called Called Every Time. Check Console</span></div>
            <div style={{ fontWeight: 600, color: "#555a64" }}>Use Effect For Blue Called <span style={{ color: "#ff0000" }}>{blueCalled}</span> Times</div>
            <div style={{ fontWeight: 600, color: "#555a64" }}>Use Effect For Brown Called <span style={{ color: "#ff0000" }}>{brownCalled}</span> Times</div>
            <br></br>
            <button style={{ backgroundColor: "#011f4b", padding: "5px", fontWeight: "bold", color: "white", marginRight: "5px" }} onClick={() => setBlue(blue + 1)}>Blue Button!</button>
            <button style={{ backgroundColor: "#83502e", padding: "5px", fontWeight: "bold", color: "white" }} onClick={() => setBrown(brown + 1)}>Brown Button!</button>
        </div >
    );
}

export default UseEffect;