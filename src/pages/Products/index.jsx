import React from 'react'
import { useParams } from 'react-router-dom'
import usePocs from '@hooks/usePocs'
import Page from '@components/Page'
import Text from '@components/Text'
import PocRow from './PocRow'

import * as Styled from './styled'

const ProductsPage = () => {
  const { lat, lng } = useParams()
  const [[poc], pocsAreLoading] = usePocs(lat, lng)

  return (
    <Page>
      <Text variant="header">Produtos</Text>
      {pocsAreLoading ? (
        <Styled.LoadingState>
          Buscando estabelecimentos próximos...
        </Styled.LoadingState>
      ) : (
        <PocRow poc={poc} />
      )}
    </Page>
  )
}

export default ProductsPage
