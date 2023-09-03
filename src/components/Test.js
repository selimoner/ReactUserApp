import React, { Component } from 'react'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 10
        }
        console.log("Constructor")
    }
    componentDidMount() {
        console.log("Component Did Mount")
        console.log("Component Did Mount value : " + this.state.a)
        this.setState({
            a: 20
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
        console.log("Component Did Update");
        console.log("Component Did Update value : " + this.state.a)
    }
    shouldComponentUpdate() {
        console.log("Should Component Update");
        console.log("Should component update value : " + this.state.a);
        return true;
    }
    render() {
        console.log("Render is working")
        return (
            <div>

            </div>
        )
    }
}
export default Test;
