import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GDMap from './components/map/ShwoMap';
import G2 from './components/chart/G2';

import PirChart from './components/chart/PieChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default PirChart;
