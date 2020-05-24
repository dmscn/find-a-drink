import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary[1]};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme: { spacing } }) => css`
    margin-top: ${spacing.large}px;
    margin-bottom: ${spacing.small}px;
  `}
`
