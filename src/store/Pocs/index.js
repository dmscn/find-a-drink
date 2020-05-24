import PocsTypes from './types'

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PocsTypes.FETCH_SUCCESS:
      return action.pocs

    case PocsTypes.FETCH_FAILURE:
      return []

    default:
      return state
  }
}
