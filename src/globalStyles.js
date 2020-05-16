import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Source+Sans+Pro:wght@400;600;700&display=swap');
  
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
