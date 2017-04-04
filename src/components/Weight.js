import React from 'react';
import WeightPlot from './WeightPlot';

const Weight = ({ weights, status }) => (
    <div className="wrapper">
        {(status === 'succeeded') ? (
            <WeightPlot
                xData={weights.dates}
                yData={weights.weights}
                type="scatter"
            />
        ) : ''}
    </div>
);


export default Weight;