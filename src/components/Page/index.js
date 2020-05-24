import styled, { css } from 'styled-components'

const Page = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${colors.gray[1]};
  `}
`
export default Page
