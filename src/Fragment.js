
function Fragment() {

    return (
        <div>
            <h1>React Fragment Explained!</h1>
            <h4>Official Doc: <a target="blank" href="https://react.dev/reference/react/Fragment">Go To Official Doc.</a></h4>
            <h3>Key Points: </h3>
            <ol style={{ marginLeft: "20%", textAlign: "left" }}>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Returning multiple elements.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Assigning multiple elements to a variable.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Grouping elements with text.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Rendering a list of Fragments.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Use Fragment, or the equivalent <>...</> syntax, to group multiple elements together. You can use it to put multiple elements in any place where a single element can go. For example, a component can only return one element, but by using a Fragment you can group multiple elements together and then return them as a group.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>Without Fragment, we need to use extra div. In DOM the extra div is present. But using Fragment, do not add extra element in DOM.</li>
                <li style={{ fontWeight: 600, color: "#555a64" }}>In case if you want to use another Component having multiple elemnt in Table <td></td> then Wrapping with div in child is not supported.</li>
            </ol>
            <hr></hr>
            <br></br>
        </div >
    );
}

export default Fragment;