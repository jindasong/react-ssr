'use strict'
import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import List from '@views/list'
import Index from '@views/index/index'

export default () => [
  <Route path="/" component={ Index } key="index" exact/>,
  <Route path="/list" component={ List } key="list"/>,
]