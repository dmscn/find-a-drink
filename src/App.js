import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from '@assets/style/theme'
import { Provider as StoreProvider } from 'react-redux'
import store from '@store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalStyled from './globalStyles'

import Home from '@pages/Home'
import Products from '@pages/Products'

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyled />
      <StoreProvider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </StoreProvider>
    </React.Fragment>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
