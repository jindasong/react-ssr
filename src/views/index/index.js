'use strict'
import React, { Component } from 'react'
import './index.less'
import Header from '@components/header'
import Nav from '@components/nav'
import ArticleItem from '@components/article-item'
import { observer  } from 'mobx-react'
import { observable  } from 'mobx'
import { inject } from 'mobx-react/index'
import Axios from 'axios/index'

@inject((stores) => {
  return {
    listState: stores.listState
  }
})
@observer
class Index extends Component {
  asyncBootstrap () {
    return new Promise((resolve, reject) => {
      this.fetchList()
        .then(({ data: { data } })=> {
          this.props.listState.data = data
          resolve(true)
        })
        .catch(reject)
    })
  }
  fetchList () {
    return Axios.get('http://cnodejs.org/api/v1/topics')
  }
  componentDidMount () {
    this.fetchList()
      .then(({ data: { data } })=> {
        this.props.listState.update(data)
      })
  }
  render () {
    return <div>
      <Header />
      <Nav />
      <div className="main">
        { this.props.listState.data.map((item, index) => {
          return <ArticleItem key={ index } />
        }) }
      </div>
    </div>
  }
}

export default Index