import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: Lato, Helvetica, sans-serif;
  }
`

export default GlobalStyle
