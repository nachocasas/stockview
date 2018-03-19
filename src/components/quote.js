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
            symbol: true,
            green: close < open ? false : true,
          });


        return(
            <div className="quote col-md-6">
               <span className="close-quote badge badge-default" onClick={ this.onCloseClick }>x</span>
                <div className="innerQuote">
                    <div className="row">
                        <div className="chart col-md-12">
                            <Sparklines height={100} width={140} data={historyClosePrices}>
                                <SparklinesLine color={graphColor}/>
                                <SparklinesReferenceLine type='min' />
                                <SparklinesReferenceLine type='max' />
                                <SparklinesSpots />
                            </Sparklines>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <span className={className}>{this.props.symbol}</span>
                            <span className="close-price">${_.ceil(this.props.close,2)}</span>
                        </div>
                        <div className="col-md-6">
                            <div>O: ${_.ceil(this.props.open,2)} </div>
                            <div>L: ${_.ceil(this.props.low,2)} </div>
                            <div>H: ${_.ceil(this.props.high,2)} </div>
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