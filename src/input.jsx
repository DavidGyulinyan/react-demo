import React, { Component } from "react";

export default class Imput extends Component {
    state = {
        text: " "
    }
    handleChange = (event)=>{
        this.setState({
            inputValue: event.target.value
        })
    };

handleClick= () => {
    this.setState({
        text: this.state.inputValue
    })
};

    render() {
        return (
            <div>
                <input 
                type="text"
                onChange={this.handleChange}
                />
                <button
                onClick={this.handleClick}
                >
                click me
                </button>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}