import ProductsTypes from './types'

export const fetchProductsSuccess = products => ({
  type: ProductsTypes.FETCH_PRODUCTS_SUCCESS,
  products,
})

export const fetchProductsFailure = () => ({
  type: ProductsTypes.FETCH_PRODUCTS_FAILURE,
})
