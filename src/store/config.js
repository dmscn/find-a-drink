import React from 'react'

export const INITIAL_STATE = {
  store: {},
  dispatch: () => {},
}

export default React.createContext(INITIAL_STATE)
