import { useState } from 'react'
import { useDispatch } from 'react-redux'
import LocationTypes from '@store/Location/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'

export default function useLocation() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const getLocation = query => {
    setLoading(true)
    promisifyActionDispatch(dispatch, {
      type: LocationTypes.FETCH,
      query,
    }).then(() => setLoading(false))
  }

  return [getLocation, loading]
}
