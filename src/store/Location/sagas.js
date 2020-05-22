import { put, takeEvery, call } from 'redux-saga/effects'
import Types from './types'
import * as actionCreators from './actions'
import GeocoderService from '@services/api/geocoder'

export function* fetchLocation({ query, resolve, reject }) {
  yield put(actionCreators.fetchLocationRequest())

  try {
    const locations = yield call(GeocoderService.getGeocode, query)
    yield put(actionCreators.fetchLocationSuccess(locations))
    resolve(locations)
  } catch (err) {
    yield put(actionCreators.fetchLocationFailure(err))
    reject(err)
  }
}

export default function* actionWatcher() {
  yield takeEvery(Types.LOCATION_FETCH, fetchLocation)
}
