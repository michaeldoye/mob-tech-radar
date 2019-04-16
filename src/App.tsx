import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {radarConfig} from "./radar.config";

interface RadarConfig {
  svg_id: string;
  width: number;
  height: number;
  colors: RadarColor;
  title: string;
  quadrants: RadarQuadrants[];
  rings: RadarRing[];
  print_layout: boolean;
  entries: RadarEntries[];
}

interface RadarQuadrants {
  name: string;
}

interface RadarRing {
  name: string;
  color: string;
}

interface RadarColor {
  background: string;
  grid: string;
  inactive: string;
}

interface RadarEntries {
  label: string;
  quadrant: number;
  ring: number;
  moved: number;
  link?: string;
  active?: boolean;
}

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
