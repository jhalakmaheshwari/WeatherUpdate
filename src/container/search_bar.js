/**
 * Created by Jhalak on 7/19/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

export class SearchBar extends Component{


    constructor(props){
        super(props)
        this.state = { term: '' };
        // Take : this.onInputChange : bind it to this for class Searchbar and overwrite and give the values to this.onInputChange
        // This is binding context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
     //   To prevent the default submit action
     event.preventDefault();

     // Go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} action="" className="input-group">
                <input
                    placeholder="Get a five day forecast in your favourite cities" className="form-control"
                       value={this.state.term}
                       onChange={this.onInputChange} />

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// null: because we only want to send mapDispatchToProps. Its f9 redux is maintaining the state, but we do not need here
export default connect(null, mapDispatchToProps)(SearchBar);