import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // take the return value from our actions, and make sure they flow through all the containers

import GameBoardSquare from './game-board-square';

class GameBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPlayer: this.props.currentPlayer
        }
    }

    render(){
        return (
            <div className="game-board">
                <div className="game-board__row">
                    <GameBoardSquare col={0} row={0} />
                    <GameBoardSquare col={1} row={0} />
                    <GameBoardSquare col={2} row={0} />
                </div>
                <div className="game-board__row">
                    <GameBoardSquare col={0} row={1} />
                    <GameBoardSquare col={1} row={1} />
                    <GameBoardSquare col={2} row={1} />
                </div>
                <div className="game-board__row">
                    <GameBoardSquare col={0} row={2} />
                    <GameBoardSquare col={1} row={2} />
                    <GameBoardSquare col={2} row={2} />
                </div>
            </div>
        );
    }
}

// Promote GameBoard from a component to a container-  it needs to know about this new dispatch method, makeMove. Make it available as a prop
export default GameBoard;