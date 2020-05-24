import React from 'react'
import { useDispatch } from 'react-redux'
import ProductTypes from '@store/Products/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'

export default function useProducts(pocId) {
  const [products, setProducts] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const dispatch = useDispatch()

  const getProducts = id =>
    promisifyActionDispatch(dispatch, {
      type: ProductTypes.FETCH_PRODUCTS,
      id,
    })

  React.useEffect(() => {
    setLoading(true)
    getProducts(pocId).then(products => {
      setProducts(products)
      setLoading(false)
    })
  }, [pocId])

  return [products, loading]
}
