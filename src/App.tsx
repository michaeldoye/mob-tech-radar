import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RadarConfig, radarConfig } from "./radar.config";

declare function radar_visualization(config: RadarConfig): void;

class App extends Component {

  componentDidMount(): void {
    radar_visualization(radarConfig);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <svg id="radar"></svg>
      </div>
    );
  }
}

export default App;
