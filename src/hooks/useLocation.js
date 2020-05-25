import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LocationTypes from '@store/Location/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'

export default function useGeocode() {
  const locations = useSelector(state => state.location)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const getGeocode = async query => {
    setLoading(true)
    try {
      await promisifyActionDispatch(dispatch, {
        type: LocationTypes.FETCH,
        query,
      })
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const hookInterface = [locations, { getGeocode }, [loading, error]]
  ;[
    hookInterface.values,
    hookInterface.methods,
    hookInterface.states,
  ] = hookInterface

  return hookInterface
}
