import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import Quote from '../components/quote';

const PERIOD = "Time Series (Daily)";
const META_DATA = "Meta Data";
const META_DATA_SYMBOL = "2. Symbol";

const PRICE_OPEN = "1. open";
const PRICE_HIGH = "2. high";
const PRICE_LOW = "3. low";
const PRICE_CLOSE = "4. close";
const LIMIT = 30;

class List extends Component {

    _prepareDataAndRenderQuote(data){
        const reversedPrices = _.take(this._extractPrices(data[PERIOD]).reverse(), LIMIT);
        const symbol = data[META_DATA][META_DATA_SYMBOL];

        const closePrice = _.head(reversedPrices).close;
        const openPrice = _.head(reversedPrices).open;
        const lowPrice = _.head(reversedPrices).low;
        const highPrice = _.head(reversedPrices).high;

        return(
            <Quote 
            key={symbol} 
            symbol={symbol} 
            close={closePrice} 
            open={openPrice} 
            low={lowPrice} 
            high={highPrice} 
            history={reversedPrices.reverse()} />
        )
    }

    render(){
        if(!this.props.data.length > 0){
            return (<div className="emptyList">Enter a symbol</div>);
        }
        return(
            <div className="row">
                { this.props.data.map((item) => this._prepareDataAndRenderQuote(item))}
            </div>
        );
    }

    _extractPrices(items){
        let prices = []
        let c = 0;
        
        _.forIn(items, (value, key) => {
            prices = [{
                open: value[PRICE_OPEN],
                close: value[PRICE_CLOSE],
                high: value[PRICE_HIGH],
                low: value[PRICE_LOW]
            },...prices]            
        })

        return prices;
    }


}

function mapStateToProps({ quotes }){
    if(!quotes.data) {
        return { data: []};
    }
    return { data: quotes.data };
}

export default connect(mapStateToProps)(List);