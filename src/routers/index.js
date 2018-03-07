'use strict'
import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import List from './../views/list'

export default () => [
  <Route path="/" render={ () =>  <Redirect to="list" /> } key="index" exact/>,
  <Route path="/list" component={List} key="list"/>,
]