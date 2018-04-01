import React, { Component } from 'react';
import Search from '../components/search';
import List from '../components/list';
import CommonQuotes from '../components/common_quotes';
import Loading from '../components/loading'

export default class App extends Component {
  render() {
    return (
      <div>
        <Loading />
        <div className="header row align-items-center">
          <div className="title col-12 col-md-4 col-lg-3">
            <h1>StockView <sub>0.1</sub></h1>
          </div>
          <div className="search-form col-12 col-md-8 col-lg-9">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="sidebar col-12 col-lg-3">
            <div className="side-box user-panel">
                <h4>Saved dashboards</h4>
                <div className="side-box-body">
                  <ul>
                    <li>Energy</li>
                  </ul>
              </div>
            
            </div>
            <CommonQuotes />
          </div>
          <div className="quotes-list col-12 col-lg-9">
            <List />      
          </div>
        </div>
      </div>
    
);
  }
}
