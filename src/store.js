import { createStore } from 'redux'

/* Model */
const initState = {
    count: 0,
    determiner: 1
}

/* Control */
const reducer = (state, action) => {
    switch(action.type){
        case "Increment":
            return {
                ...state,
                count: +state.count + action.payload.value 
            }
        case "Decrement":
            return {
                ...state, 
                count: +state.count - action.payload.value 
            }
        case "SetDeterminer":
            return {
                ...state,
                determiner: action.payload.determiner
            }
        default:
            return { ...state }
    }
}

export default createStore(reducer, initState);