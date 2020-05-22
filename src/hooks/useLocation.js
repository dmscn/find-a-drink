import { useDispatch } from 'react-redux'
import LocationTypes from '@store/Location/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'

export default function useLocation() {
  const dispatch = useDispatch()

  const getLocation = query =>
    promisifyActionDispatch(dispatch, {
      type: LocationTypes.LOCATION_FETCH,
      query,
    })

  return {
    getLocation,
  }
}
