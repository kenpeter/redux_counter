// export const
// name space to action
// counter/inc_request
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
//
export const INCREMENT = 'counter/INCREMENT'
//
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
//
export const DECREMENT = 'counter/DECREMENT'

// state of this app
const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
}

// The counter has state.
// {count: 0, up: false, down: false}
// so we have init state + action
export default (state = initialState, action) => {
  // if else action type
  switch (action.type) {
    // if inc_requested
    case INCREMENT_REQUESTED:
      // we return ...state + is_inc_ing, true
      return {
        ...state,
        isIncrementing: true
      }

    // if done increment.
    case INCREMENT:
      // return ... state + count + 1 + is_inc_ing false
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    // because we don't care inc, it is not your job.
    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    //
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    default:
      return state
  }
}

//....
export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

// //
export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    // set timeout 3s
    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

//
export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

//
export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
