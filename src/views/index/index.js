'use strict'
import './index.less'
import Helmet from 'react-helmet'
import React, { Component } from 'react'
import Header from '@components/header'
import Nav from '@components/nav'
import ArticleItem from '@components/article-item'
import { observer, inject  } from 'mobx-react'
import api from '@api'

@inject((stores) => {
  return {
    topicListState: stores.topicListState
  }
})
@observer
class Index extends Component {
  asyncBootstrap () {
    return new Promise((resolve, reject) => {
      api.article.fetchArticleList()
        .then(( { data } ) => {
          this.props.topicListState.update(data)
          resolve(true)
        })
        .catch(reject)
    })
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>毛豆的前端博客-首页</title>
          <meta name="description" content="毛豆的前端博客|web前端开发工程师|Node.js|React|Vue|Webpack"/>
        </Helmet>
        { this.props.topicListState.data.map((item, index) => {
          return <ArticleItem title={ item.title } tags={ [ item.tab ] } desc={ item.title + item.title } key={ index } itemId={ item.id }/>
        }) }
      </div>
    )
  }
}

export default Index