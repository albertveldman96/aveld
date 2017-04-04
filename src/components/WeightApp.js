import React, { Component } from 'react';
import WeightContainer from '../containers/WeightContainer';
import '../styles.css';
import WeightButtonContainer from '../containers/WeightButtonContainer';

class WeightApp extends Component {
    render() {
        return (
            <div className="App">
                <WeightButtonContainer/>
                <WeightContainer/>
            </div>
        );
    }
}



export default WeightApp;
