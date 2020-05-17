import { put, takeLatest } from 'redux-saga/effects'
import Types from './types'
import * as actionCreators from './actions'

function* fetchLocation() {
  yield put(actionCreators.fetchLocationRequest())

  try {
    const response = yield fetch(/* Location API url*/)
    const JSON = yield response.json()
    yield put(actionCreators.fetchLocationSuccess(JSON.location))
  } catch (err) {
    yield put(actionCreators.fetchLocationFailure(err))
  }
}

export default function* actionWatcher() {
  yield takeLatest(Types.LOCATION_FETCH, fetchLocation)
}
