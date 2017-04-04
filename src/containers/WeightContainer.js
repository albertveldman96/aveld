import { connect } from 'react-redux';
import Weight from '../components/Weight';

const mapStateToProps = (state) => ({
    weights: state.weight.weights,
    status: state.weight.status
});

const WeightContainer = connect(mapStateToProps)(Weight);

export default WeightContainer;