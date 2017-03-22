import React, { Component } from 'react';

class SearchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }

    changeLocation = (e) => {
        this.setState({
            location: e.target.value
        });
    };

    submitSearch = (e) => {
        e.preventDefault();
        this.props.getWeather(this.state.location);
    }

    render() {
        return (
            <div>
                <h1>Weer</h1>
                <form onSubmit={this.submitSearch} >
                    <input
                        placeholder={"Plaats, Land"}
                        type="text"
                        value={this.state.location}
                        onChange={this.changeLocation} />
                </form>
            </div>
        )
    }
}

// SearchWeather.propTypes = {
//     getWeather: PropTypes.func.isRequired
// };

export default SearchWeather;