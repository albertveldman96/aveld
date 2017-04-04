import { connect } from 'react-redux';
import { getWeights } from '../actions';
import WeightButton from '../components/WeightButton';

const mapDispatchToProps = dispatch => ({
    getWeights: () => dispatch(getWeights())
});

export default connect(null, mapDispatchToProps)(WeightButton);