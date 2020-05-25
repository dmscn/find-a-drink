import Types from './types'

const INITIAL_STATE = []

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_SUCCESS:
      return action.location

    case Types.FETCH_FAILURE:
      return INITIAL_STATE

    default:
      return state
  }
}

export default reducer
