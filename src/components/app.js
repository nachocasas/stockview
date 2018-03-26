import React, { Component } from 'react';
import Search from '../components/search';
import List from '../components/list';
import CommonQuotes from '../components/commonQuotes';
import Loading from '../components/loading'

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Loading />
        <div className="header row">
          <div className="title col-md-2">
            <h1>StockView 0.1</h1>
          </div>
          <div className="search-form col-md-10">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="sidebar col-md-2">
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
          <div className="quotes-list col-md-10">
            <List />      
          </div>
        </div>
      </div>
    
);
  }
}
