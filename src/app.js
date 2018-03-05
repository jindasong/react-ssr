'use strict'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Helmet from 'react-helmet'
import Axios from 'axios'

@inject('listState')
@observer
class App extends Component {
  constructor () {
    super()
  }

  asyncBootstrap () {
   return new Promise(resolve => {
    this.fetchTopics()
      .then((data) => {
        this.props.listState.data = data.data.data
        resolve(true)
      })
   })
  }

  fetchTopics () {
    return Axios.get('http://cnodejs.org/api/v1/topics')
  }

  render () {
    let list = this.props.listState.data.map((item, index) => {
      return (
        <div key={ index }>{ item.title }</div>
      )
    })
    return (
      <div>
        <Helmet>
          <title>This is topic list</title>
          <meta name="description" content="This is description" />
        </Helmet>
        { list }
      </div>
    )
  }

  componentDidMount () {
    this.fetchTopics()
      .then((data) => {
        this.props.listState.data = data.data.data
      })
  }
}

export default App