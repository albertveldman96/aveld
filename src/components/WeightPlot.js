/* global Plotly */
import React, { Component } from 'react';

class WeightPlot extends Component {
    drawPlot = () => {
        Plotly.newPlot('plot', [{
            x: this.props.xData,
            y: this.props.yData,
            type: this.props.type
        }]);
    };
}

export default WeightPlot;