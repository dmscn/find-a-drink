import React from 'react'
import { useParams } from 'react-router-dom'
import usePocs from '@hooks/usePocs'
import Page from '@components/Page'
import Text from '@components/Text'
import PocRow from './PocRow'

import * as Styled from './styled'

const ProductsPage = () => {
  const { lat, lng } = useParams()
  const pocs = usePocs()
  const [poc] = pocs.value
  const { getPocs } = pocs.methods
  const [pocsAreLoading] = pocs.states

  React.useEffect(() => {
    getPocs({ latitude: lat, longitude: lng })
  }, [lat, lng])

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
