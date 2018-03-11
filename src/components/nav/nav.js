'use strict'

import React, { Component } from 'react'

class Nav extends Component {
  render () {
    return (
      <nav className="nav">
        <a className="nav__item active" href="#">Home</a>
        <a className="nav__item" href="#">About</a>
        <a className="nav__item" href="#">Github</a>
      </nav>
    )
  }
}

export default Nav