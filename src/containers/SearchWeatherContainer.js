import { connect } from 'react-redux';
import { getWeather } from '../actions';
import SearchWeather from '../components/SearchWeather';

const mapDispatchToProps = dispatch => ({
    getWeather: (city) => dispatch(getWeather(city))
});

export default connect(null, mapDispatchToProps)(SearchWeather);