import { put, call, takeEvery } from 'redux-saga/effects'
import ProductTypes from './types'
import * as actionCreators from './actions'
import GraphqlService from '@services/api/graphql'

export function* fetchProducts({ id, resolve, reject }) {
  try {
    const response = yield call(GraphqlService.getProducts, id)
    const {
      data: {
        poc: { products },
      },
    } = yield response.json()
    yield put(actionCreators.fetchProductsSuccess(products))
    resolve(products)
  } catch (err) {
    yield put(actionCreators.fetchProductsFailure())
    reject(err)
  }
}

export default function* watcher() {
  yield takeEvery(ProductTypes.FETCH_PRODUCTS, fetchProducts)
}
