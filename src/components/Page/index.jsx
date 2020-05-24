import styled, { css } from 'styled-components'

const Page = styled.div`
  ${({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: ${colors.gray[1]};
    overflow: auto;
  `}
`
export default Page
