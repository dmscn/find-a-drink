import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@assets/style/theme'

import ProductsPage from '.'
import usePocs from '@hooks/usePocs'

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({
    lat: 42,
    lng: 42,
  })),
}))

jest.mock('@hooks/usePocs', () =>
  jest.fn(() => ({
    value: [],
    methods: {
      getPocs: jest.fn(),
    },
    states: [false],
  }))
)

jest.mock('@pages/Products/PocRow.jsx', () => () => <div>Poc Row</div>)
jest.mock('@components/Cart/index.jsx', () => () => <div>Cart Component</div>)

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <ProductsPage />
    </ThemeProvider>
  )

afterEach(cleanup)

describe('Products Page', () => {
  it('renders header with cart', () => {
    const { queryByText } = setup()
    const logo = queryByText(/🍻/)
    const cart = queryByText(/cart component/i)

    expect(logo).toBeInTheDocument()
    expect(cart).toBeInTheDocument()
  })

  it('renders loading state', () => {
    usePocs.mockReturnValueOnce({
      ...usePocs(),
      states: [true],
    })
    const { queryByText } = setup()
    const loadingState = queryByText(/buscando estabelecimentos/i)

    expect(loadingState).toBeInTheDocument()
  })
  it('fetch pocs on render', () => {
    const mockGetPocs = jest.fn()
    usePocs.mockReturnValueOnce({
      ...usePocs(),
      methods: { getPocs: mockGetPocs },
    })
    setup()
    expect(mockGetPocs).toHaveBeenCalledWith({ latitude: 42, longitude: 42 })
  })
})
