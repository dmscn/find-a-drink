import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

import rootSaga from './sagas'
import locationReducer from './Location'

const reducers = combineReducers({
  location: locationReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
