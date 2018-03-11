'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tag extends Component {

  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.string.isRequired
  }

  render () {
    let tag
    if (this.props.href) {
      tag = <a href={ this.props.href } className="tag"> { this.props.children } </a>
    } else {
      tag = <span className="tag"> { this.props.children } </span>
    }

    return tag
  }
}

export default Tag