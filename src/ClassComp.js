import { Component } from "react";

export class ClassComp extends Component {
    constructor() {
        super();
        this.state = {
            title: 'React Life Cycle Explained For Class Component',
            lifeCycles: ['Constructor']
        }
    }

    componentDidMount() {
        let tempArray = [...this.state.lifeCycles];
        tempArray.push('Component Did Mount');
        this.setState({ lifeCycles: tempArray });
    }

    shouldComponentUpdate() {
        if (this.state.lifeCycles.indexOf('Should Component Update') === -1) {
            this.setState({ lifeCycles: [...this.state.lifeCycles, 'Should Component Update'] });
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.lifeCycles.indexOf('Component Did Update') === -1) {
            let tempArray = [...this.state.lifeCycles];
            tempArray.push('Component Did Update');
            this.setState({ lifeCycles: tempArray });
        }
    }

    componentWillUnmount() {
        this.setState({ lifeCycles: [...this.state.lifeCycles, 'Component Will Unmount'] });
        console.log('componentWillUnmount');
    }

    render() {
        console.log('Render Called!');

        return (
            <div>
                <h1>{this.state.title}</h1>
                <img src="/react_life_cycle.png" alt="React Life Cycle" height={400} width={800}></img>
                {
                    (() => {
                        return this.state.lifeCycles.map((item, index) => <h4 style={{ textAlign: "left", marginLeft: '42%' }} key={index}>{(index + 1) + ' : ' + item}</h4>)
                    })()
                }
            </div>
        );
    }
}