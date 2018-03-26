import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {

    render(){
        if(this.props.loading){
            return(
                <div className="load-bar">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            );
        } else {
            return <span />;
        }

    }

}

function mapStateToProps({ quotes }){
    return({ loading : quotes.loading });
}

export default connect(mapStateToProps)(Loading);