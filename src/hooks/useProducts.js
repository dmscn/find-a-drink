import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductTypes from '@store/Products/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'
import createCancelablePromise from '@utils/cancelablePromise'

export default function useProducts() {
  const products = useSelector(state => state.products)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const cancelablePromise = createCancelablePromise()

  useEffect(() => {
    return () => cancelablePromise.cancel()
  }, [])

  const getProducts = async id => {
    if (!id) return
    setLoading(true)
    try {
      await cancelablePromise(
        promisifyActionDispatch(dispatch, {
          type: ProductTypes.FETCH_PRODUCTS,
          id,
        })
      )
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const hookInterface = [products, { getProducts }, [loading, error]]
  ;[
    hookInterface.values,
    hookInterface.methods,
    hookInterface.states,
  ] = hookInterface

  return hookInterface
}
