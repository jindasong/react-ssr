'use strict'
import React, { Component } from 'react'
import './index.less'
import Header from '@components/header'
import Nav from '@components/nav'
import ArticleItem from '@components/article-item'
import { observer  } from 'mobx-react'
import { inject } from 'mobx-react/index'
import http from '@http'

@inject((stores) => {
  return {
    topicListState: stores.topicListState
  }
})
@observer
class Index extends Component {
  asyncBootstrap () {
    return new Promise((resolve, reject) => {
      this.fetchList()
        .then(( { data } ) => {
          this.props.topicListState.update(data)
          resolve(true)
        })
        .catch(reject)
    })
  }
  fetchList () {
    return http.get('http://cnodejs.org/api/v1/topics')
  }
  componentDidMount () {
    this.fetchList()
      .then(( { data } ) => {
        this.props.topicListState.update(data)
      })
  }
  render () {
    return <div>
      <Header />
      <Nav />
      <div className="main">
        { this.props.topicListState.data.map((item, index) => {
          return <ArticleItem title={item.title} tags={ [ item.tab ] } desc={ item.title + item.title } key={ index } />
        }) }
      </div>
    </div>
  }
}

export default Index