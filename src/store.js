import { createStore } from 'redux'

const initState = {
    count: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "Increment":
            return {...state, count: ++state.count }
        case "Decrement":
            return {...state, count: --state.count }
        default:
            return {...state}
    }
}

export default createStore(reducer, initState);