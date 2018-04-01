import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeQuote, updateQuote } from '../actions';

class Quote extends Component {

    constructor(props){
        super(props);
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    componentDidMount(){
        this.updateTmo = setTimeout(() => {
            console.log("MOUNT TIMEOUT: (("+this.props.symbol+"))");
            this.props.updateQuote(this.props.symbol);
        }, 30000)
    }

    componentWillUpdate(){
        console.log("CLEARING TIMEOUT: (("+this.props.symbol+"))");
        clearTimeout(this.updateTmo);
    }

    componentDidUpdate(){
        this.updateTmo = setTimeout(() => {
            console.log("COMPONENT UPDATE TIMEOUT (("+this.props.symbol+"))");
            this.props.updateQuote(this.props.symbol);
        }, 30000)
    }

    onCloseClick(event){
        clearTimeout(this.updateTmo);
        this.props.removeQuote(this.props.symbol);
    }

    render(){
        const historyClosePrices = this.props.history.map(item => item.close);
        const open = this.props.open;
        const close = this.props.close;
        const variation = (close-open)*100/close;
        const graphColor = close < open ? 'red' : 'green';
        let className = classNames({
            "close-price" : true,
            badge: true,
            "badge-success": close > open ? true : false,
            "badge-primary": close == open ? true : false,
            "badge-danger": close < open ? true : false,
          });
         
        return(
            <div className="col-12 col-md-6 col-lg-4">
                <div className="quote col-12">
                    <div className="row data-row align-items-center">
                        <div className="chart col-4">
                            <Sparklines height={100} width={140} data={historyClosePrices}>
                                <SparklinesLine color={graphColor}/>
                                <SparklinesReferenceLine type='min' />
                                <SparklinesReferenceLine type='max' />
                                <SparklinesSpots />
                            </Sparklines>
                        </div>
                        <div className="col-3">
                            <span className="symbol">{this.props.symbol}</span>
                            <span className={className}>{_.ceil(variation,2)}%</span>
                            <span className="variation">${_.ceil(close,2)}</span>
                        </div>
                        <div className="additional-data col-3">
                            <span>O: ${_.ceil(this.props.open,2)} </span>
                            <span>L: ${_.ceil(this.props.low,2)} </span>
                            <span>H: ${_.ceil(this.props.high,2)} </span>
                        </div>
                        <div className="controls col-2">
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

export default connect(null, { removeQuote, updateQuote })(Quote);