import Types from './types'

const INITIAL_STATE = {
  location: {
    lat: null,
    lng: null,
    label: null,
  },
  loading: false,
  error: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOCATION_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case Types.LOCATION_FETCH_SUCCESS:
      return {
        ...state,
        location: action.location,
        loading: false,
        error: null,
      }
    case Types.LOCATION_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
  }
}

export default reducer
