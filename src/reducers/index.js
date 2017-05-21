import { combineReducers } from 'redux';
import PlayersReducer from './reducer_players'
import CurrentPlayerReducer from './reducer_current-player'

const rootReducer = combineReducers({
  players: PlayersReducer,
  currentPlayer: CurrentPlayerReducer
});

export default rootReducer;
