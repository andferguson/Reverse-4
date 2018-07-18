import React, { Component } from 'react';
import './Game.css';

import Tile from '../Tile/Tile';

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleShift = this.handleShift.bind(this);
  }

  handleShift(event){
    this.props.onShift(event.target.id);
  }

  render() {
    return (
      <div className={"Game_" + this.props.state}>
        <div className="Board">
          {
            this.props.board.map((color, index) => {
              return <Tile dynamicColor={color} key={index} onShift={this.props.onShift} />;
            })
          }
        </div>
        <div className="Controls">
          <button id="0" onClick={this.handleShift}>1</button>
          <button id="1" onClick={this.handleShift}>2</button>
          <button id="2" onClick={this.handleShift}>3</button>
          <button id="3" onClick={this.handleShift}>4</button>
          <button id="4" onClick={this.handleShift}>5</button>
          <button id="5" onClick={this.handleShift}>6</button>
          <button id="6" onClick={this.handleShift}>7</button>
        </div>
      </div>
    );
  }
}

export default Game;
