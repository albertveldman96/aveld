/* global Plotly */
import React, { Component } from 'react';

class WeatherPlot extends Component {
    drawPlot = () => {
        Plotly.newPlot('plot', [{
            x: this.props.xData,
            y: this.props.yData,
            type: this.props.type
        }], {
            margin: {
                t: 0, r: 0, l:30
            },
            xaxis: {
                gridcolor: 'transparant'
            }
        }, {
            displayModeBar: false
        });
    };

    componentDidMount() {
        this.drawPlot();
    }

    componentDidUpdate() {
        this.drawPlot();
    }

    render() {
        return (<div id="plot"/>);
    }
}

export default WeatherPlot;