import React, { Component } from 'react';

class StatusBar extends Component {
    constructor(props){
        super(props);

    }
    
    render(){
        return (
            <div className="game-board">
                <div className="well">
                    <h2>Player 1's move</h2>
                </div>
            </div>
        );
    }
}

export default StatusBar;