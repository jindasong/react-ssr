'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Store from './store'
import App from './App'

const isServer = !!window.__INIT_STATE__

function render () {
  return (
    <AppContainer>
      <Provider topicListState={ new Store.TopicListState(isServer ? window.__INIT_STATE__.topicListState.data : []) }>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </AppContainer>
  )
}

if (isServer) {
  ReactDOM.hydrate(
    render(),
    document.getElementById('root')
  )
} else {
  ReactDOM.render(
    render(),
    document.getElementById('root')
  )
}
