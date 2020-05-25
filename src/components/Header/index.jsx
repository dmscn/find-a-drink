import React from 'react'
import styled, { css } from 'styled-components'
import Cart from '@components/Cart'

const Wrapper = styled.header`
  ${({ theme: { spacing, colors, elevations } }) => css`
    display: inline-flex;
    width: 100%;
    height: ${spacing.huge}px;
    background: ${colors.primary[1]};
    box-shadow: ${elevations.medium};
    justify-content: space-between;
  `}
`

const Logo = styled.span`
  ${({ theme: { spacing } }) => css`
    font-size: ${spacing.large * 2}px;
    margin: ${spacing.xsmall}px;
  `}
`

export default function Header({ withCart }) {
  return (
    <Wrapper>
      <Logo>🍻</Logo>
      {withCart && <Cart />}
    </Wrapper>
  )
}
