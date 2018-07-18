import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  render() {
    return (
      <div className="Tile" style={{background : this.props.dynamicColor}}>
      </div>
    );
  }
}

export default Tile;
