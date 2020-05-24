import { put, takeEvery, call } from 'redux-saga/effects'
import PocsTypes from './types'
import * as actionCreators from './actions'
import GraphqlService from '@services/api/graphql'

export function* fetchPocs({ coordinates, resolve, reject }) {
  try {
    const response = yield call(GraphqlService.getPocs, coordinates)
    const {
      data: { pocSearch: pocs },
    } = yield response.json()
    yield put(actionCreators.fetchPocsSuccess(pocs))
    resolve(pocs)
  } catch (err) {
    yield put(actionCreators.fetchPocsFailure())
    reject(err)
  }
}

export default function* watcher() {
  yield takeEvery(PocsTypes.FETCH_POCS, fetchPocs)
}
