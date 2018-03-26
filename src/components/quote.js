import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeQuote } from '../actions';

class Quote extends Component {

    constructor(props){
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    onCloseClick(event){
        this.props.removeQuote(this.props.symbol);
    }

    render(){
        const historyClosePrices = this.props.history.map(item => item.close);
        const open = this.props.open;
        const close = this.props.close;
        const graphColor = close < open ? 'red' : 'green';
        let className = classNames({
            "close-price" : true,
            badge: true,
            "badge-success": close > open ? true : false,
            "badge-primary": close == open ? true : false,
            "badge-danger": close < open ? true : false,
          });
         
        return(
            <div className="quote col-md-3">
               
                <div className="innerQuote">
                    <div className="chart">
                        <Sparklines height={100} width={140} data={historyClosePrices}>
                            <SparklinesLine color={graphColor}/>
                            <SparklinesReferenceLine type='min' />
                            <SparklinesReferenceLine type='max' />
                            <SparklinesSpots />
                        </Sparklines>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <span className="symbol">{this.props.symbol}</span>
                            <span className={className}>${_.ceil(this.props.close,2)}</span>
                        </div>
                        <div className="additional-data col-md-4">
                            <span>O: ${_.ceil(this.props.open,2)} </span>
                            <span>L: ${_.ceil(this.props.low,2)} </span>
                            <span>H: ${_.ceil(this.props.high,2)} </span>
                        </div>
                        <div className="controls col-md-2">
                            <button className="close-quote" onClick={ this.onCloseClick }>
                                <img src='/svg/delete.svg' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ removeQuote }, dispatch);
}

export default connect(null, {removeQuote})(Quote);