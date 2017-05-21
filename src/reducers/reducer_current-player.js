// State argumenmt is not application state, only the state this reducer is responsible for
// - all reducers get these two arguments
export default function(state = null, action) {

    // If no state has been passed into this reducer, set the payload equal to a default first player...
    // This seems to break a fundamental rule of reducers in that you should never "mutate its arguments" -> http://redux.js.org/docs/basics/Reducers.html#handling-actions
    if(state == null){
        action.payload = {
            id: 1, mark: 'X', moves: [], score: 0
        }
    }
    
    switch(action.type){
    case 'MAKE_MOVE':
        return action.payload;
    }
    
    return state;
}