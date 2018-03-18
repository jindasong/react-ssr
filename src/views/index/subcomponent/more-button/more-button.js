'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class MoreButton extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired
  }
  constructor () {
    super()
    this._onClick = this._onClick.bind(this)
  }
  _onClick () {
    let onClick = this.props.onClick
    onClick && onClick()
  }
  render () {
    return (
      <a className="more-button" onClick={ this._onClick } href="javascript:void(0);">{ this.props.children }</a>
    )
  }
}

export default MoreButton