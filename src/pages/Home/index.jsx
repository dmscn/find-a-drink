import React from 'react'
import { useHistory } from 'react-router-dom'
import useLocation from '@hooks/useLocation'

import Autocomplete from '@components/Autocomplete'
import Page from '@components/Page'
import Header from '@components/Header'
import Text from '@components/Text'

import * as Styled from './styled'

const formatLabel = ({ street, city }) => `${street}, ${city}`

const formatSuggestions = locations =>
  locations
    .filter(({ street, city }) => Boolean(street && city))
    .map(({ latLng, ...location }) => ({
      label: formatLabel(location),
      value: latLng,
    }))

const HomePage = () => {
  const [query, setQuery] = React.useState('')
  const [locations, { getGeocode }, [loading]] = useLocation()

  const history = useHistory()

  const handleType = event => {
    const { value } = event.target
    setQuery(value)
    getGeocode(value)
  }

  const redirectToProductsPage = (lat, lng) => {
    if (!lat || !lng) return null
    history.push(`/products/${lat}/${lng}`)
  }

  const handleSelection = ({ value: { lat, lng } }) => {
    redirectToProductsPage(lat, lng)
  }

  return (
    <Page>
      <Header />
      <Styled.Wrapper>
        <Text variant="header">Onde você está? 🔍</Text>
        <Styled.InputWrapper>
          <Autocomplete
            placeholder="Digite sua localização"
            value={query}
            suggestions={formatSuggestions(locations)}
            onChange={handleType}
            onSelection={handleSelection}
            isLoading={loading}
          />
        </Styled.InputWrapper>
        <Text variant="small">Clique em uma das sugestões para prosseguir</Text>
      </Styled.Wrapper>
    </Page>
  )
}

export default HomePage
