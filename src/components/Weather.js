import React from 'react';
import Plot from './Plot';

const Weather = ({ weather, status }) => (
    <div className="wrapper">
        {(status === 'succeeded') ? (
            <Plot
                xData={weather.dates}
                yData={weather.temps}
                type="scatter"
            />
        ) : ''}
    </div>
);

export default Weather;