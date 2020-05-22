import React from 'react'
import Autocomplete from '@components/Autocomplete'
import useLocation from '@hooks/useLocation'
import { useSelector } from 'react-redux'

const formatLabel = ({ street, city }) => `${street}, ${city}`

const formatLocations = locations =>
  locations
    .filter(({ street, city }) => Boolean(street && city))
    .map(({ latLng, ...location }) => ({
      label: formatLabel(location),
      value: latLng,
    }))

const Home = () => {
  const [location, setLocation] = React.useState('')
  const [suggestions, setSuggestions] = React.useState(null)
  const { loading } = useSelector(state => state.location)
  const { getLocation } = useLocation()

  const getSuggestions = async query => {
    try {
      const locations = await getLocation(query)
      console.log({ locations, suggestions: formatLocations(locations) })
      setSuggestions(formatLocations(locations))
    } catch (err) {
      console.error(err)
      setSuggestions([])
    }
  }

  const handleType = event => {
    const { value } = event.target
    setLocation(value)
    getSuggestions(value)
  }

  const handleSelection = ({ value }) => {
    console.log(value)
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Autocomplete
        placeholder="Digite sua localização"
        value={location}
        suggestions={suggestions}
        onChange={handleType}
        onSelection={handleSelection}
        isLoading={loading}
      />
    </div>
  )
}

export default Home
