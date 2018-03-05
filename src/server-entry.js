import React from 'react'
import { Provider, useStaticRendering } from 'mobx-react'
import { createStoreMap } from './store'
import App from './app'

useStaticRendering(true)
export default (stores) => {
  return  (
    <Provider {...stores}>
      <App/>
    </Provider>
  )
}

export {
  createStoreMap
}