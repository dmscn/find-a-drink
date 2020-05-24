import React from 'react'
import useProducts from '@hooks/useProducts'
import Text from '@components/Text'

import * as Styled from './styled'

const formatNumberToBRL = number =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    number
  )

const PocRow = ({ poc }) => {
  const [products, productsAreLoading] = useProducts(poc.id)
  const [selectedProducts, setSelectedProducts] = React.useState([])

  const addProductToCart = id =>
    setSelectedProducts(products => [...products, id])

  const removeProductFromCart = id =>
    setSelectedProducts(products => products.filter(product => product !== id))

  return (
    <Styled.PocWrapper>
      <Text variant="title">{poc.tradingName}</Text>
      {productsAreLoading ? (
        <Styled.LoadingState>Buscando produtos...</Styled.LoadingState>
      ) : (
        <Styled.ProductsList>
          {products.map(product => {
            const {
              id,
              title,
              productVariants: [{ price }],
              images: [{ url }],
            } = product

            return (
              <Styled.ProductsListItem key={id}>
                <Styled.Image src={url} />
                <Text variant="subtitle">{title}</Text>
                <Text variant="body">{formatNumberToBRL(price)}</Text>
                <Styled.ButtonsRow>
                  {selectedProducts.includes(id) ? (
                    <Styled.Button onClick={() => removeProductFromCart(id)}>
                      Remover ❌
                    </Styled.Button>
                  ) : (
                    <Styled.Button onClick={() => addProductToCart(id)}>
                      Adicionar 🍹
                    </Styled.Button>
                  )}
                </Styled.ButtonsRow>
              </Styled.ProductsListItem>
            )
          })}
        </Styled.ProductsList>
      )}
    </Styled.PocWrapper>
  )
}

export default PocRow
