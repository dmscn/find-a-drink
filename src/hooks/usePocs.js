import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PocsTypes from '@store/Pocs/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'
import createCancelablePromise from '@utils/cancelablePromise'

export default function usePocs() {
  const pocs = useSelector(state => state.pocs)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const cancelablePromise = createCancelablePromise()

  useEffect(() => {
    return () => cancelablePromise.cancel()
  }, [])

  const getPocs = async coordinates => {
    setLoading(true)
    try {
      await cancelablePromise(
        promisifyActionDispatch(dispatch, {
          type: PocsTypes.FETCH_POCS,
          coordinates,
        })
      )
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const hookInterface = [pocs, { getPocs }, [loading, error]]
  ;[
    hookInterface.value,
    hookInterface.methods,
    hookInterface.states,
  ] = hookInterface

  return hookInterface
}
