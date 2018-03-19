import React, { Component } from 'react';
import Search from '../containers/search';
import List from '../containers/list';
import CommonQuotes from '../components/commonQuotes';

export default class App extends Component {
  render() {
    return (
      <div>
        <CommonQuotes />
        <span>Or...</span>
        <Search />
        <List />
      </div>
    );
  }
}
