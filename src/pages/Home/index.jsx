import React from 'react'
import TextField from '@components/TextField'
import useLocation from '@hooks/useLocation'

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
  const [suggestions, setSuggestions] = React.useState([])
  const { getLocation } = useLocation()

  const getSuggestions = async query => {
    try {
      const locations = await getLocation(query)
      setSuggestions(formatLocations(locations))
    } catch (err) {
      console.error(err)
      setSuggestions([])
    }
  }

  const handleTyping = event => {
    const { value } = event.target
    setLocation(value)
    getSuggestions(value)
  }

  return (
    <>
      <TextField
        placeholder="Digite sua localização"
        value={location}
        onChange={handleTyping}
      />
      <ul>
        {suggestions.map(({ label }) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    </>
  )
}

export default Home
