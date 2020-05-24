import PocsTypes from './types'

export const fetchPocsSuccess = pocs => ({
  type: PocsTypes.FETCH_POCS_SUCCESS,
  pocs,
})

export const fetchPocsFailure = () => ({
  type: PocsTypes.FETCH_POCS_FAILURE,
})
