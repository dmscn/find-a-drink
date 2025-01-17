import { all } from 'redux-saga/effects'

import locationActionWatcher from './Location/sagas'
import pocsActionWatcher from './Pocs/sagas'
import productsActionWatcher from './Products/sagas'

export default function* rootSaga() {
  yield all([
    locationActionWatcher(),
    pocsActionWatcher(),
    productsActionWatcher(),
  ])
}
