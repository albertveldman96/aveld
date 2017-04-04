import React, { Component } from 'react';

class WeightButton extends Component {

    buttonClick = (e) => {
        e.preventDefault;
        this.props.getWeights();
    };

    render() {
        return (
            <div>
                <h1>Gewicht</h1>
                <button onClick={this.buttonClick}>Klik!</button>
            </div>
        )
    }
}

export default WeightButton;