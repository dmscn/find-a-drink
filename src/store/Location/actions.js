import Types from './types'

export const fetchLocationSuccess = location => ({
  type: Types.FETCH_SUCCESS,
  location,
})

export const fetchLocationFailure = error => ({
  type: Types.FETCH_FAILURE,
  error,
})
