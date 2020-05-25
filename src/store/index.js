import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import rootSaga from './sagas'
import locationReducer from './Location'
import pocsReducer from './Pocs'
import productsReducer from './Products'

const reducers = combineReducers({
  location: locationReducer,
  pocs: pocsReducer,
  products: productsReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
