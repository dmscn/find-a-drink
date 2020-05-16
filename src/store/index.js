import React from 'react'

import StoreContext from '@store/config'

export default function Store({ children }) {
  // const [authState, authDispatch] = useReducer(authReducer, authStore)

  // const triggerDispatches = action => {
  //   const dispatchs = [counterDispatch, authDispatch]
  //   dispatchs.forEach(dispatcher => dispatcher(action))
  // }

  // const combineReducers = {
  //   store: {
  //     ...counterState,
  //     ...authState,
  //   },
  //   dispatch: action => triggerDispatches(action),
  // }

  return (
    <StoreContext.Provider value={() => {}}>{children}</StoreContext.Provider>
  )
}

export const useStore = () => React.useContext(StoreContext)
