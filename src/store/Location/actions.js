import Types from './types'

export const fetchLocationRequest = () => ({
  type: Types.LOCATION_FETCH_REQUEST,
})

export const fetchLocationSuccess = location => ({
  type: Types.fetchLocationSuccess,
  location,
})

export const fetchLocationFailure = error => ({
  type: Types.LOCATION_FETCH_FAILURE,
  error,
})
