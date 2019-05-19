import React from 'react'
import { connect } from 'react-redux'

const App = ({store, dispatch}) => {
    console.log(dispatch);
    return(
        <div>
            <p>Count: {store.count}</p>
            <button onClick={() => dispatch.increment() }>Increase</button>
            <button onClick={() => dispatch.decrement() }>Decrease</button>
        </div>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        store: {
            count: state.count
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch:{
            increment: () => dispatch({ type: 'Increment' }),
            decrement: () => dispatch({ type: 'Decrement' }),
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);