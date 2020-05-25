export const Types = {
  ADD: 'CART/ADD',
  REMOVE: 'CART/REMOVE',
}

const INITIAL_STATE = []

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, action.id]

    case Types.REMOVE:
      return state.filter(product => product !== action.id)

    default:
      return state
  }
}
