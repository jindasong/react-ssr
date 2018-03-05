'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import Store from './store'
import App from './app'

const isServer = !!window.__INIT_STATE__
ReactDOM.hydrate(
  <Provider listState={ new Store.ListState(isServer ? window.__INIT_STATE__.listState.data : null) }>
    <App/>
  </Provider>,
  document.getElementById('root')
)
