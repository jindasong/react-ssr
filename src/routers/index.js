'use strict'
import React from 'react'
import {
  Route
} from 'react-router-dom'
import Index from '@views/index'
import ArticleDetails from '@views/article/article-details'
export default () => [
  <Route path="/" component={ Index } key="index" exact/>,
  <Route path="/article/details/:articleId" component={ ArticleDetails } key="articleDetails" exact/>
]