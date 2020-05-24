import React from 'react'
import styled, { css } from 'styled-components'

const ANIMATION_DURATION = 1000

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`

const Circle = styled.div`
  ${({ delay, theme: { colors } }) => css`
    position: absolute;
    border 4px solid ${colors.primary[1]};
    opacity: 1;
    border-radius: 50%;
    animation: ripple ${ANIMATION_DURATION}ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation-delay: ${delay && `-0.5s`};
  `}
`

const LoadingSpinner = () => (
  <Wrapper>
    <Circle />
    <Circle delay />
  </Wrapper>
)

export default LoadingSpinner
