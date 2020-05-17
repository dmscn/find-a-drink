import { all } from 'redux-saga/effects'

import locationActionWatcher from './Location/sagas'

export default function* rootSaga() {
  yield all([locationActionWatcher()])
}
