import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            value: 0,
            text: "Counter"
        };
    }

    render() {
        return (
            <div>
                <p>
                    Counter value is {this.state.value}
                </p>
                <p>{this.state.text}</p>

                <button
                    onClick={() => {
                        this.setState({
                            value: this.state.value - 1,
                            text: "Counting",
                        });

                        if(this.state.value === 1) {
                            this.setState({
                                text: "Counter is 0",
                            })
                        }
                    }}
                >
                    counter -
                </button>

                <button
                    onClick={() => {
                        this.setState({
                            value: this.state.value + 1,
                            text: "Counting",
                        });
                        
                        if(this.state.value === -1) {
                            this.setState({
                                text: "Counter is 0",
                            })
                        }
                    }}
                    >
                    counter +
                    </button>
            </div>
        )
    }
}

export { Counter };
