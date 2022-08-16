import React, { Component } from "react";

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.value,
        };
    }

    changeCurrency = () => {
        let { price } = this.state;
        let realPrice = parseFloat(price);

        if(price.includes("$")) {
            price = realPrice * 407.5 + "֏";
        }
        else{
            price = realPrice / 407.5 + "$";
        }

        this.setState({
            price: price
        });
    };

    render() {
        const { price } = this.state;

        return (
            <div>
                <span>Price: {price}</span>
                <button onClick={this.changeCurrency}>change</button>
            </div>
        );
    }

}
export { Price };