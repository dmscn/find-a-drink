import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PocsTypes from '@store/Pocs/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'

export default function usePocs(lat, lng) {
  const pocs = useSelector(state => state.pocs)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const getPoc = coordinates =>
    promisifyActionDispatch(dispatch, {
      type: PocsTypes.FETCH_POCS,
      coordinates,
    })

  useEffect(() => {
    setLoading(true)
    getPoc({ latitude: lat, longitude: lng }).then(() => {
      setLoading(false)
    })
  }, [lat, lng])

  return [pocs, loading]
}
