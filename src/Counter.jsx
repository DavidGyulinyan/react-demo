import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.value = 0;
        this.state = {
            value: 0,
            text: "hello"
        };
    }

    handleClickMinus = () => {
        this.setState({
            value:this.state.value - 1
        });
    }

    handleClickPlus = () => {
        this.setState({
            value:this.state.value + 1,
            text: "it works"
        });
        // this.state.value++;
    }


    render() {


        return (
            <div>
                hello from counter
                <p>The value is {this.props.defaultValue}</p>
                <h3>{this.state.value}</h3>
                <p>{this.state.text}</p>


                <button
                onClick={this.handleClickMinus}
                >
                   count -
                </button>



                <button
                onClick={this.handleClickPlus}
                >
                    count +
                </button>
            </div>
        )
    }
}

export {Counter};