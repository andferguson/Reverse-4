import React, { Component } from 'react';
import './App.css';

import Game from '../Game/Game';
import Settings from '../Settings/Settings';
import AI from '../ComputerPlayer/ComputerPlayer';

/*TODO
localStorage for theme settings and stats
https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_local_clickcount
*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Array(42).fill('grey'),
      turn: 0,
      players: 1,
      gameMode: 'lockout',
      first: Math.floor(Math.random() * 2),
      gameState: 'inactive',
      message: "Start a Game"
    };

    this.shiftColumn = this.shiftColumn.bind(this);
    this.newGame = this.newGame.bind(this);
    //this.checkVertical = this.checkVertical.bind(this);
    //this.checkDiagonal = this.checkDiagonal.bind(this);
    //this.checkHorizontal = this.checkHorizontal.bind(this);

  }

/*
start highest index
work down to lowest
add color input
*/
  shiftColumn(index) {
    let tempBoard = this.state.board;
    let oldTurn = this.state.turn
    let iterator = parseInt(index,10) + 35;
    while(iterator > 6) {
      tempBoard[iterator] = tempBoard[iterator - 7];
      iterator = iterator - 7;
    }
    if(oldTurn%2) {
      tempBoard[index] = 'red';
    }
    else {
      tempBoard[index] = 'blue';
    }
    oldTurn++;
    this.setState({
      board: tempBoard,
      turn: oldTurn
    }, function () {
      if(this.state.turn%2) {
        this.shiftColumn(AI.makeMove(0,this.state.board));
      }
    });
  }

  newGame() {
    if(this.state.gameState === 'active') {
      if (!window.confirm("Are you sure?")) {
        return;
      }
    }
    console.log('activating game');
    this.setState({
      board: new Array(42).fill('grey'),
      turn: 0,
      first: Math.floor(Math.random() * 2),
      gameState: 'active',
    });
  }
/*
  checkBoard(index) {
    checkVertical(index);
    checkHorizontal(index);
    checkDiagonal(index);
  }

  checkVertical(index) {
    if(this.state.board[index] === this.state.board[index+numColumns]) {
      if(this.state.board[index] === this.state.board[index+(numColumns*2)]) {
        if(this.state.board[index] === this.state.board[index+(numColumns*3)]) {
          return 1;
        }
      }
    }
    return 0;
  }

  checkHorizontal(index) {
    return 0;
  }

  checkDiagonal(index) {
    return 0;
  }
*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reverse 4</h1>
          <p className="TODO">Welcome to React</p>
        </header>
        <div className="App-content">
          <Settings onNewGame={this.newGame}/>
          <h1 className={"Message_" + this.state.gameState}>{this.state.message}</h1>
          <Game board={this.state.board} onShift={this.shiftColumn} state={this.state.gameState}/>
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
