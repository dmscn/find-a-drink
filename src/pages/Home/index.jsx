import React from 'react'
import { useHistory } from 'react-router-dom'
import useLocation from '@hooks/useLocation'

import Autocomplete from '@components/Autocomplete'
import * as Styled from './styled'

const formatLabel = ({ street, city }) => `${street}, ${city}`

const formatLocations = locations =>
  locations
    .filter(({ street, city }) => Boolean(street && city))
    .map(({ latLng, ...location }) => ({
      label: formatLabel(location),
      value: latLng,
    }))

const HomePage = () => {
  const [location, setLocation] = React.useState('')
  const [suggestions, setSuggestions] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const { getLocation } = useLocation()

  const history = useHistory()

  const getSuggestions = async query => {
    setLoading(true)
    try {
      const locations = await getLocation(query)
      console.log({ locations, suggestions: formatLocations(locations) })
      setSuggestions(formatLocations(locations))
    } catch (err) {
      console.error(err)
      setSuggestions([])
    } finally {
      setLoading(false)
    }
  }

  const handleType = event => {
    const { value } = event.target
    setLocation(value)
    getSuggestions(value)
  }

  const redirectToProductsPage = (lat, lng) => {
    if (!lat || !lng) return null
    history.push(`/products/${lat}/${lng}`)
  }

  const handleSelection = ({ value: { lat, lng } }) => {
    redirectToProductsPage(lat, lng)
  }

  return (
    <Styled.Wrapper>
      <Autocomplete
        placeholder="Digite sua localização"
        value={location}
        suggestions={suggestions}
        onChange={handleType}
        onSelection={handleSelection}
        isLoading={loading}
      />
    </Styled.Wrapper>
  )
}

export default HomePage
