'use strict'
import './layout.less'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '@components/header'
import Nav from '@components/nav'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render () {
    return (
      <div className="layout" >
        <Header />
        <Nav />
        <div className="layout__main">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Layout
