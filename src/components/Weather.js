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
        ) : null}
    </div>
);

// Weather.propTypes = {
//     weather: PropTypes.arrayOf(PropTypes.shape({
//         temps: PropTypes.array.isRequired,
//         dates: PropTypes.array.isRequired
//     }).isRequired
//     ).isRequired,
//     status: PropTypes.string.isRequired
// };

export default Weather;