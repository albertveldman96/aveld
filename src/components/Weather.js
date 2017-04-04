import React from 'react';
import WeatherPlot from './WeatherPlot';

const Weather = ({ weather, status }) => (
    <div className="wrapper">
        {(status === 'succeeded') ? (
            <WeatherPlot
                xData={weather.dates}
                yData={weather.temps}
                type="scatter"
            />
        ) : ''}
    </div>
);

export default Weather;