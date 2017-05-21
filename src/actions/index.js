export function makeMove(currentPlayer) {
    // makeMove is an actionCreator - needs to return an action (an object with type and payload properties)
    return {
        type: 'MAKE_MOVE',
        payload: currentPlayer
    }
}