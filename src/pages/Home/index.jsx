import React from 'react'
import TextField from '@components/TextField'
import useLocation from '@hooks/useLocation'

const Home = () => {
  const [location, setLocation] = React.useState('')
  const [suggestions, setSuggestions] = React.useState([])
  const { getLocation } = useLocation()

  const getSuggestions = async query => {
    try {
      const locations = await getLocation(query)
      setSuggestions(locations)
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
      {suggestions}
    </>
  )
}

export default Home
