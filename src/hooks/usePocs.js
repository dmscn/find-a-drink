import React from 'react'
import { useDispatch } from 'react-redux'
import PocsTypes from '@store/Pocs/types'
import promisifyActionDispatch from '@utils/promisifyActionDispatch'

export default function usePocs(lat, lng) {
  const [pocs, setPocs] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const dispatch = useDispatch()

  const getPoc = coordinates =>
    promisifyActionDispatch(dispatch, {
      type: PocsTypes.FETCH_POCS,
      coordinates,
    })

  React.useEffect(() => {
    setLoading(true)
    getPoc({ latitude: lat, longitude: lng }).then(pocs => {
      setPocs(pocs)
      setLoading(false)
    })
  }, [lat, lng])

  return [pocs, loading]
}
