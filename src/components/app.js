import React, { Component } from 'react';

import GameBoard from '../containers/game-board';
import StatusBar from '../containers/status-bar';
import PlayerList from '../containers/player-list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: {
        id: 1,
        mark: 'X'
      },
      
    }
    
  }
  
  render() {
    return (
      <div>
        <h1> React TicTacToe </h1>
        <StatusBar />
        <div className="col-xs-6">
          <GameBoard />
        </div>
        <div className="col-xs-6">
          <PlayerList />
        </div>
      </div>
    );
  }
}
