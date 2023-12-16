import HOCCounter from "./HOCCounter";
import HOCRed from "./HOCRed";
import HOCGreen from "./HOCGreen";
import HOCBlue from "./HOCBlue";

function HigherOrderComponents() {
    return (
        <>
            <h1>Higher Order Components Explained!</h1>
            <h4>Official Doc: <a target="blank" href="https://legacy.reactjs.org/docs/higher-order-components.html">Go To Official Doc.</a></h4>
            <h3>Key Points: </h3>
            <ol style={{ marginLeft: "20%", textAlign: "left" }}>
                <li style={{ fontWeight: 600, color: "#555a64" }}>A higher-order component (HOC) is an advanced technique in React for reusing component logic.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Concretely, a higher-order component is a function that takes a component and returns a new component.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Whereas a component transforms props into UI, a higher-order component transforms a component into another component.</li>
            </ol>
            <hr></hr>
            <HOCRed HOCCounter={HOCCounter} />
            <HOCGreen HOCCounter={HOCCounter} />
            <HOCBlue HOCCounter={HOCCounter} />
        </>
    );
}

export default HigherOrderComponents;