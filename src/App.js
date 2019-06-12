import React, { Fragment } from 'react'
import { connect } from 'react-redux'

/* Model */
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store: {
            count: state.count,
            determiner: state.determiner
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch:{
            
            increment: (value) => { 
                dispatch({
                    type: 'Increment',
                    payload: {
                        value: value
                    }
                });
            },
            decrement: (value) => { 
                dispatch({
                    type: 'Decrement',
                    payload: {
                        value: value
                    }
                });
            },
            setDeterminer: (determiner) => {
                dispatch({
                    type: 'SetDeterminer',
                    payload: {
                        determiner: +determiner
                    }
                })
            }

        }
    }
}

/* View */
const App = ({store, dispatch}) => {
    const {
        count,
        determiner
    } = store;

    const {
        increment,
        decrement,
        setDeterminer
    } = dispatch;

    return(
        <Fragment>
            <p>Count: {count}</p>
            <input
                type="number"
                placeholder="determiner"
                onChange={(e) => setDeterminer(e.target.value)}
                value={determiner} />
            <button onClick={() => increment(determiner) }>Increase</button>
            <button onClick={() => decrement(determiner) }>Decrease</button>
        </Fragment>
    )
}

/* Control */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);