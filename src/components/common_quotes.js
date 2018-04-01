import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/index';

class CommonQuotes extends Component {


    constructor(props){
        super(props);
        this.onLabelClick = this.onLabelClick.bind(this);
    }

    onLabelClick(item){
        this.props.fetchQuote(item);
    }

    renderCommonQuotes(){

        const commonQuotes = ['AAPL', 'GOOGL', 'CHK', 'GE', 'BAC','F', 'AVP','WFC', 
                            'EGO', 'T', 'CTL', 'PFE', 'WMT', 'C', 'BABA', 'XOM', 'KO', 'RAD', 'VZ', 'SNAP', 'SWN'];

        return commonQuotes.map((item) => {
            return (
                <span key={ item } className="badge badge-primary" onClick={ () => this.onLabelClick(item)}>{ item }</span>
            );
        })
        
    }

    render(){

        return(
            <div className="side-box common-box">
                <h4>Most visited</h4>
                <div className="side-box-body">
                    { this.renderCommonQuotes() }
                </div>
            </div>
        )
    }


  
}

export default connect(null, { fetchQuote })(CommonQuotes);