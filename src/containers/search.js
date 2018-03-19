import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote, setLoading } from '../actions/index';
import Loading from './loading';


class Search extends Component {

    constructor(props){
        super(props);

        this.state = { term: '' };
        this.onSearchInput = this.onSearchInput.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onSearchInput(event){
        this.setState({ term: event.target.value} );
    }


    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchQuote(this.state.term);
        this.setState({ term: ''});
    }

    render(){
        return (
            <div className="form-group">
                <form onSubmit={ this.onFormSubmit } className="input-group">
                    <input className="form-control" onChange={ this.onSearchInput } value={ this.state.term } placeholder="Enter quote" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Search</button>
                    </span>
                </form>
                <Loading />
            </div>
        )
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchQuote }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);