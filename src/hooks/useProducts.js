import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductTypes from '@store/Products/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'

export default function useProducts(pocId) {
  const products = useSelector(state => state.products)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const getProducts = id =>
    promisifyActionDispatch(dispatch, {
      type: ProductTypes.FETCH_PRODUCTS,
      id,
    })

  useEffect(() => {
    setLoading(true)
    getProducts(pocId).then(() => {
      setLoading(false)
    })
  }, [pocId])

  return [products, loading]
}
