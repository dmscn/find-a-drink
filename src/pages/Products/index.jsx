import React from 'react'
import { useParams } from 'react-router-dom'
import usePocs from '@hooks/usePocs'

import * as Styled from './styled'

const ProductsPage = () => {
  const { lat, lng } = useParams()
  const [pocs, pocsAreLoading] = usePocs(lat, lng)

  console.log({ pocs, pocsAreLoading })

  return <Styled.Wrapper>{`${lat} ${lng} / POCS: ${pocs}`}</Styled.Wrapper>
}

export default ProductsPage
