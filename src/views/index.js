'use strict'
import React, { Component } from 'react'

class Index extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return <div>index</div>
  }
}

export default Index