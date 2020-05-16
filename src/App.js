import { ThemeProvider } from 'styled-components'
import Home from '@pages/Home'
import Products from '@pages/Products'
import StoreProvider from '@store'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyled from './globalStyles'

import theme from '@assets/style/theme'

const App = () => (
  <Router>
    <GlobalStyled />
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </StoreProvider>
    </ThemeProvider>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
