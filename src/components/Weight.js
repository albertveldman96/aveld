import React from 'react';
import WeatherPlot from './WeatherPlot';

const Weight = ({ weights, status }) => (
    <div className="wrapper">
        {(status === 'succeeded') ? (
            <WeatherPlot
                xData={weights.dates}
                yData={weights.weights}
                type="scatter"
            />
        ) : ''}
    </div>
);


export default Weight;