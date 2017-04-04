import { connect } from 'react-redux';
import Weather from '../components/Weather';

const mapStateToProps = (state) => ({
    weather: state.weather.weather,
    status: state.weather.status
});

const WeatherContainer = connect(mapStateToProps)(Weather);

export default WeatherContainer;