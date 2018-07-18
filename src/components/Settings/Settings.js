import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame(event){
    this.props.onNewGame(event.target);
  }

  render() {
    return (
      <div className="Settings">
        <h1>Themes</h1>
        <button>day/night</button>
        <h1>Modes</h1>
        <button>endless/lockout</button>
        <button>tiebreak/none</button>
        <h1>Players</h1>
        <button>1/2-local/2-network</button>
        <h1>Game Control</h1>
        <button onClick={this.handleNewGame}>New Game</button>
      </div>
    );
  }
}

export default Settings;
