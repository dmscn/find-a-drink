import ProductTypes from './types'

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ProductTypes.FETCH_SUCCESS:
      return action.products

    case ProductTypes.FETCH_FAILURE:
      return []

    default:
      return state
  }
}
