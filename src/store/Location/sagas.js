import { put, takeLatest } from 'redux-saga/effects'
import Types from './types'
import * as actionCreators from './actions'

function* fetchLocation() {
  yield put(actionCreators.fetchLocationRequest())

  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts/1')
    const JSON = yield response.json()
    console.log(actionCreators.fetchLocationSuccess())
    yield put(actionCreators.fetchLocationSuccess(JSON))
  } catch (err) {
    yield put(actionCreators.fetchLocationFailure(err))
  }
}

export default function* actionWatcher() {
  yield takeLatest(Types.LOCATION_FETCH, fetchLocation)
}
