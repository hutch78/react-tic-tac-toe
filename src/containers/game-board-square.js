import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // take the return value from our actions, and make sure they flow through all the containers

import { makeMove } from '../actions/index';


class GameBoardSquare extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            mark: '-',
            currentPlayer: this.props.currentPlayer
        };

        // console.log(this.state);
    }
    
    render(){
        return (
            <div className="game-board__square col-xs-1">
                <button 
                    onClick={(event) => this.makeMove(this.props.currentPlayer)}
                    className="game-board__square__button">
                    {this.state.mark}
                </button>
            </div>
        );
    }

    makeMove(currentPlayer) {
        console.log('Made a move', this.props.col, this.props.row);
        this.setState({mark: 'X'});
        this.props.makeMove(currentPlayer);
    }
}

// THIS IS THE GLUE BETWEEN REACT AND REDUX
function mapStateToProps(state) {
    // Whatever is returned here will show up as props inside of PlayerList
    console.log(state);
    return {
        players: state.players,
        currentPlayer: state.currentPlayer
    }
}

// Anything returned from this function will end up as props on the GameBoard container
function mapDispatchToProps(dispatch) {
    // Whenever makeMove is called, the result should be passed to all of our reducers (updating the currentPlayer)
    return bindActionCreators({ makeMove: makeMove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoardSquare);