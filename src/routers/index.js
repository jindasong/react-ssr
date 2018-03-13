'use strict'
import React from 'react'
import {
  Route
} from 'react-router-dom'
import Index from '@views/index/index'

export default () => [
  <Route path="/" component={ Index } key="index" exact/>
]