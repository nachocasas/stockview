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
                <span key={ item } className="badge badge-default" onClick={ () => this.onLabelClick(item)}>{ item }</span>
            );
        })
        
    }

    render(){

        return(
            <div className='common-card card'>
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Common Quotes</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="quotes-list">
                        { this.renderCommonQuotes() }
                    </div>
                </div>
            </div>
        )
    }


  
}

export default connect(null, { fetchQuote })(CommonQuotes);