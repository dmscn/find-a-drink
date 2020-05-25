import React from 'react'
import styled, { css } from 'styled-components'
import Text from '@components/Text'
import useCart from '@hooks/useCart'
import useProducts from '@hooks/useProducts'

const Wrapper = styled.span`
  ${({ theme: { spacing } }) => css`
    display: inline-flex;
    justify-content: center;
    width: ${spacing.huge}px;
    height: ${spacing.huge}px;
    margin: 0 ${spacing.small}px;

    ul {
      display: none;
    }

    &:hover ul {
      display: block;
    }
  `}
`

const Menu = styled.ul`
  ${({ theme: { spacing, elevations } }) => css`
    position: absolute;
    top: ${spacing.xxxlarge}px;
    right: ${spacing.medium}px;
    width: ${spacing.xxlarge}vw;
    max-height: ${spacing.huge * 4}px;
    margin: ${spacing.xsmall}px 0;
    padding: 0;

    border-radius: ${spacing.xxsmall}px;
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: ${elevations.small};
    list-style-type: none;
    z-index: 1;
  `}
`

const MenuItem = styled.li`
  ${({ theme: { spacing, colors } }) => css`
    padding: ${spacing.small}px ${spacing.xsmall}px;
    background-color: ${colors.gray[0]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
      background-color: ${colors.negative[0]};

      &::before {
        content: '💔';
        margin-right: ${spacing.small}px;
      }
    }

    &:not(:last-child) {
      border-bottom: 2px solid ${colors.gray[1]};
    }
  `}
`

const Logo = styled.span`
  ${({ count, theme: { spacing, colors, fonts } }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: ${spacing.medium * 2}px;
    margin: ${spacing.xsmall}px;
    cursor: pointer;

    &::before {
      content: "${count}";
      position: relative;
      top: -${spacing.small}px;
      left: ${spacing.medium}px;
      display:flex;
      justify-content: center;
      align-items: center;
      width: ${spacing.xlarge}px;
      height: ${spacing.xlarge}px;
      color: ${colors.white};
      font-size: ${fonts.sizes.small}px;
      font-weight: ${fonts.weights.bold};
      background-color: ${colors.negative[2]};
      border-radius: 50%;
    }
  `}
`

export default function Cart() {
  const [cart, { remove: removeFromCart }] = useCart()
  const [products] = useProducts()

  return (
    <Wrapper>
      <Logo count={cart.length || 0}>{'🛒'}</Logo>
      {cart && (
        <Menu>
          {cart.map(cartProduct => {
            const { id, title } = products.find(p => p.id === cartProduct)

            return (
              <MenuItem key={id} onClick={() => removeFromCart(id)}>
                <Text>{title}</Text>
              </MenuItem>
            )
          })}
        </Menu>
      )}
    </Wrapper>
  )
}
