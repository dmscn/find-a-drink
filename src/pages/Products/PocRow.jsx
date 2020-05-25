import React from 'react'
import useProducts from '@hooks/useProducts'
import Text from '@components/Text'

import * as Styled from './styled'

const FALLBACK_IMAGE_URL =
  'https://stamandtrade.com/wp-content/uploads/2017/03/no-image-available.jpg'

const formatNumberToBRL = number =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    number
  )

const applyFallbackImage = event => (event.target.src = FALLBACK_IMAGE_URL)

const ButtonRow = ({ isProductOnCart, onAdd, onRemove }) => (
  <Styled.ButtonsRow>
    {isProductOnCart ? (
      <Styled.Button onClick={onRemove}>Remover</Styled.Button>
    ) : (
      <Styled.Button onClick={onAdd}>Adicionar</Styled.Button>
    )}
  </Styled.ButtonsRow>
)

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
                <Styled.Image src={url} onError={applyFallbackImage} />
                <Text variant="subtitle">{title}</Text>
                <Text variant="body">{formatNumberToBRL(price)}</Text>
                <ButtonRow
                  isProductOnCart={cart.includes(id)}
                  onAdd={() => addToCart(id)}
                  onRemove={() => removeFromCart(id)}
                />
              </Styled.ProductsListItem>
            )
          })}
        </Styled.ProductsList>
      )}
    </Styled.PocWrapper>
  )
}

export default PocRow
