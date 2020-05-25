import React from 'react'
import styled, { css } from 'styled-components'

import LoadingSpinner from '@components/LoadingSpinner'
import Text from '@components/Text'

export const Content = styled.main`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: ${spacing.large}px;
  `}
`

const LoadingWrapper = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PrimaryText = styled(Text)`
  ${({ theme: { colors, spacing } }) => css`
    color: ${colors.primary[2]};
    margin-bottom: ${spacing.xxlarge}px;
  `}
`

export const LoadingState = ({ children }) => (
  <LoadingWrapper>
    <PrimaryText variant="title">{children}</PrimaryText>
    <LoadingSpinner />
  </LoadingWrapper>
)

export const PocWrapper = styled.section`
  ${({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    padding: ${spacing.large}px;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  `}
`

export const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ProductsListItem = styled.li`
  ${({ theme: { spacing, elevations, colors } }) => css`
    display: flex;
    flex-direction: column;
    width: ${spacing.huge * 4}px;
    height: ${spacing.huge * 6}px;
    margin: ${spacing.medium}px;
    padding: ${spacing.medium}px;
    border-radius: ${spacing.small}px;
    overflow: hidden;
    box-shadow: ${elevations.medium};
    cursor: pointer;

    &:hover {
      box-shadow: ${elevations.large};
      border: 2px solid ${colors.primary[1]};
      transform: scale(1.1);
    }
  `}
`

export const Image = styled.img`
  ${({ theme: { spacing } }) => css`
    width: 100%;
    min-height: ${spacing.huge * 4}px;
    margin-bottom: ${spacing.medium}px;
  `}
`

export const ButtonsRow = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  bottom: 0;
`

export const Button = styled.button`
  ${({ theme: { colors, fonts, spacing } }) => css`
    border: 0;
    padding: ${spacing.xsmall}px ${spacing.small}px;
    background-color: transparent;
    color: ${colors.primary[1]};
    font-family: ${fonts.SourceSansPro};
    font-weight: ${fonts.weights.bold};
    font-size: ${fonts.sizes.small}px;
    border-radius: ${spacing.large}px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: ${colors.primary[0]};
      color: ${colors.primary[2]};
    }
  `}
`
