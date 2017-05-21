// State argumenmt is not application state, only the state this reducer is responsible for
// - all reducers get these two arguments
export default function(state = null, action) {

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