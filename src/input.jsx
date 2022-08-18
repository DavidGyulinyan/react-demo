import React, { Component } from "react";

export default class Imput extends Component {
    state = {
        text: " "
    }
    handleChange = (event)=>{
        this.setState({
            text: event.target.value
        })
    }
    render() {
        return (
            <div>
                <input 
                type="text"
                onChange={this.handleChange}
                />
                <button>click me</button>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}