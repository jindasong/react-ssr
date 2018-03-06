import React from 'react'
import { Provider, useStaticRendering } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'
import { createStoreMap } from './store'
import App from './views/index'

useStaticRendering(true)
export default (stores) => {
  return  (
    <AppContainer>
      <Provider {...stores}>
        <App/>
      </Provider>
    </AppContainer>
  )
}

export {
  createStoreMap
}