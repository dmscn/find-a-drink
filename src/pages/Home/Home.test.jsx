import React from 'react'
import { Router } from 'react-router-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@assets/style/theme'

import HomePage, { formatLabel, formatSuggestions } from '.'
import useLocation from '@hooks/useLocation'

jest.mock('@hooks/useLocation', () => jest.fn())

const mockHistory = {
  push: jest.fn(),
  listen: jest.fn(),
  location: {},
}

const mockLocations = [
  { street: 'a', city: 'a', latLng: { lat: 'a', lng: 'a' } },
  { street: 'b', city: 'b', latLng: { lat: 'b', lng: 'b' } },
  { street: 'c', city: 'c', latLng: { lat: 'c', lng: 'c' } },
  { city: 'd', latLng: { lat: 'dCity', lng: 'dCity' } },
  { street: 'd', latLng: { lat: 'dStreet', lng: 'dStreet' } },
]
const mockMethods = {
  getGeocode: jest.fn(() => () => Promise.resolve(mockLocations)),
}
const mockUiStates = [false, null]
useLocation.mockReturnValue([mockLocations, mockMethods, mockUiStates])

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <Router history={mockHistory}>
        <HomePage />
      </Router>
    </ThemeProvider>
  )

afterEach(cleanup)

describe('Home Page', () => {
  it('renders autocomplete', () => {
    const { queryByPlaceholderText } = renderComponent()
    const autocomplete = queryByPlaceholderText(/digite sua localização/i)
    expect(autocomplete).toBeInTheDocument()
  })
  it('renders header', () => {
    const { queryByText } = renderComponent()
    const header = queryByText(/🍻/)
    expect(header).toBeInTheDocument()
  })
  it('should not renders cart', () => {
    const { queryByText } = renderComponent()
    const cart = queryByText(/🛒/)
    expect(cart).not.toBeInTheDocument()
  })
  it('renders location list', () => {
    const { queryAllByTestId } = renderComponent()
    const options = queryAllByTestId('autocomplete-option').map(
      li => li.textContent
    )
    const expectedOptions = mockLocations.slice(0, 3).map(formatLabel)

    expect(options).toHaveLength(3)
    expect(options).toEqual(expectedOptions)
  })

  it('redirects correctly', () => {
    const { queryAllByTestId } = renderComponent()
    const [option] = queryAllByTestId('autocomplete-option')
    fireEvent.click(option)
    expect(mockHistory.push.mock.calls[0][0]).toEqual('/products/a/a')
  })

  it('fetchs geocode when typing', () => {
    const mockQuery = 'Rua São Salvador, Flamengo'
    const { queryByPlaceholderText } = renderComponent()
    const autocomplete = queryByPlaceholderText(/digite sua localização/i)

    fireEvent.change(autocomplete, {
      target: { value: mockQuery },
    })

    expect(mockMethods.getGeocode).toHaveBeenCalledWith(mockQuery)
  })

  describe('methods', () => {
    const mockValidLocation = {
      street: 'street',
      city: 'city',
    }

    const mockInvalidLocation = {
      street: 'street',
    }

    describe('formatLabel()', () => {
      it('formats correctly', () => {
        expect(formatLabel(mockValidLocation)).toEqual('street, city')
        expect(formatLabel(mockInvalidLocation)).toEqual('street, undefined')
      })
    })

    describe('formatSuggestions()', () => {
      it('formats correctly', () => {
        const result = formatSuggestions(mockLocations)

        result.forEach(formattedLocation => {
          expect(formattedLocation).toHaveProperty('label')
          expect(formattedLocation).toHaveProperty('value')
        })
      })

      it('filters only valid locations', () => {
        expect(formatSuggestions(mockLocations)).toHaveLength(3)
      })
    })
  })
})
