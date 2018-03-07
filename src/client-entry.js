'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Store from './store'
import App from './App'

const isServer = !!window.__INIT_STATE__

ReactDOM.hydrate(
  <AppContainer>
    <Provider listState={ new Store.ListState(isServer ? window.__INIT_STATE__.listState.data : {}) }>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)
