import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '@assets/style/theme'

import PocRow, { formatNumberToBRL } from './PocRow'
import useProducts from '@hooks/useProducts'

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(() => ({
    lat: 42,
    lng: 42,
  })),
}))

const mockProduct = {
  id: 1,
  title: 'mock product',
  productVariants: [{ price: 20.1 }],
  images: [{ url: 'https://img.url' }],
}

const mockProducts = [
  mockProduct,
  mockProduct,
  mockProduct,
].map((product, index) => ({ ...product, id: product.id + index }))

jest.mock('@hooks/useProducts', () =>
  jest.fn(() => [
    mockProducts,
    {
      getProducts: jest.fn(),
    },
    [false],
  ])
)

jest.mock('@hooks/useCart', () =>
  jest.fn(() => [
    [],
    {
      getProducts: jest.fn(),
    },
    [false],
  ])
)

const mockPoc = {
  id: 42,
  tradingName: 'Distribuidor Mock',
}

afterEach(cleanup)

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <PocRow poc={mockPoc} />
    </ThemeProvider>
  )

describe('Products Page | PocRow', () => {
  it('formats currency correctly', () => {
    const mockFloatPrice = 22.22
    expect(formatNumberToBRL(mockFloatPrice)).toEqual('R$22.22')
  })

  it('renders loading state', () => {
    const [value, methods] = useProducts()
    useProducts.mockReturnValueOnce([value, methods, [true]])

    const { queryByText } = setup()
    const loadingState = queryByText(/buscando produtos/i)

    expect(loadingState).toBeInTheDocument()
  })

  it('renders products correctly', () => {
    const { queryAllByTestId } = setup()

    const mockProductsTitles = mockProducts.map(product => product.title)
    const products = queryAllByTestId('product-item').map(
      product => product.textContent
    )

    expect(products).toEqual(mockProductsTitles)
  })
})
