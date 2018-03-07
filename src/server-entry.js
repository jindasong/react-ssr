import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { Provider, useStaticRendering } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import { createStoreMap } from './store'
import App from './App'

useStaticRendering(true)
export default (stores, routerContext, url) => {
  return  (
    <AppContainer>
      <Provider {...stores}>
        <StaticRouter context={routerContext} location={url}>
          <App/>
        </StaticRouter>
      </Provider>
    </AppContainer>
  )
}

export {
  createStoreMap
}