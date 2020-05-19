import Types from './types'

export const fetchLocation = () => ({
  type: Types.LOCATION_FETCH,
})

export const fetchLocationRequest = () => ({
  type: Types.LOCATION_FETCH_REQUEST,
})

export const fetchLocationSuccess = location => ({
  type: Types.LOCATION_FETCH_SUCCESS,
  location,
})

export const fetchLocationFailure = error => ({
  type: Types.LOCATION_FETCH_FAILURE,
  error,
})
