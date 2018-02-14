import React, { Component } from 'react';
import './App.css';

import Game from '../Game/Game';
import Settings from '../Settings/Settings';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reverse 4</h1>
          <p className="TODO">Welcome to React</p>
        </header>
        <div className="App-content">
          <Settings />
          <Game />
        </div>
        <footer className="App-footer">
          <h2 className="TODO">Welcome to React</h2>
          <p className="TODO">Welcome to React</p>
        </footer>
      </div>
    );
  }
}

export default App;
