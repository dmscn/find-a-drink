import { put, debounce, call } from 'redux-saga/effects'
import Types from './types'
import * as actionCreators from './actions'
import GeocoderService from '@services/api/geocoder'

const DEBOUNCE_TIMEOUT = 1000

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
  yield debounce(DEBOUNCE_TIMEOUT, Types.LOCATION_FETCH, fetchLocation)
}
