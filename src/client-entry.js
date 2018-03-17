'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import Store from './store'
import App from './App'

const isServer = !!window.__INIT_STATE__

if (!window.__INIT_STATE__) {
  window.__INIT_STATE__ = {}
}

let topicListState = window.__INIT_STATE__.topicListState
let articleState = window.__INIT_STATE__.articleState

if (navigator.serviceWorker) {
  let swPath = '/sw.js'
  navigator.serviceWorker.register(swPath)
    .catch(error => {
      console.log('service worker 注册失败:', error)
    })
}

function render () {
  return (
    <AppContainer>
      <Provider topicListState={ new Store.TopicListState(topicListState.data) } articleState={ new Store.ArticleState(articleState) }>
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
