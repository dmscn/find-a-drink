import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import rootSaga from './sagas'
import locationReducer from './Location'
import pocsReducer from './Pocs'
import productsReducer from './Products'
import cartReducer from './Cart'

const reducers = combineReducers({
  location: locationReducer,
  pocs: pocsReducer,
  products: productsReducer,
  cart: cartReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
