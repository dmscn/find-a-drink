import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from '@store/Cart/actions'

export default function useCart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const add = id => dispatch(actionCreators.addToCart(id))
  const remove = id => dispatch(actionCreators.removeFromCart(id))

  return [cart, { add, remove }]
}
