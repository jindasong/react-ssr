'use strict'
import React, { Component } from 'react'
import Routers from './routers'
import Layout from '@views/layout'
import './assets/less/base.less'

class App extends Component {
  render () {
    return (
      <Layout>
        <Routers/>
      </Layout>
    )
  }
}

export default App