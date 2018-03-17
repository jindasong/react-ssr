'use strict'

import React, { Component } from 'react'
import avatar from './images/avatar.jpg'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <img className="header__avatar" src={ avatar } alt="花生毛豆头像"/>
        <span className="header__title">毛豆的前端博客</span>
      </header>
    )
  }
}

export default Header