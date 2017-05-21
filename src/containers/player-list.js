import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerList extends Component {
    renderList() {
        return this.props.players.map((player) => {
            return (
                <li 
                    key={player.id}
                    className="list-group-item">
                        Player {player.id}
                </li>
            );
        });
    }
    
    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// THIS IS THE GLUE BETWEEN REACT AND REDUX
function mapStateToProps(state) {
    // Whatever is returned here will show up as props inside of PlayerList
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(PlayerList)