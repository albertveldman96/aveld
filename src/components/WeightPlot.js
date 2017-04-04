/* global Plotly */
import React, { Component } from 'react';

class WeightPlot extends Component {
    drawPlot = () => {
        Plotly.newPlot('plot', [{
            x: this.props.xData,
            y: this.props.yData,
            type: this.props.type
        }], {
            margin: {
                t: 0, r: 0, l:30
            },
            hovermode: 'closest',
            xaxis: {
                title: 'Datum'
            },
            yaxis: {
                title: 'Gewicht'
            }
            // annotations: [
            //     {
            //         x: -0.5,
            //         y: 0.5,
            //         xref: 'paper',
            //         yref: 'paper',
            //         text: 'Gewicht',
            //         showarrow: false,
            //     }
            // ]
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

export default WeightPlot;