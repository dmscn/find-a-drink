import { Types } from '@store/Cart'

export const addToCart = id => ({
  type: Types.ADD,
  id,
})

export const removeFromCart = id => ({
  type: Types.REMOVE,
  id,
})
