'use strict'
import './index.less'
import Helmet from 'react-helmet'
import React, { Component } from 'react'
import MoreButton from './subcomponent/more-button'
import ArticleItem from '@components/article-item'
import { observable, action } from 'mobx'
import { observer, inject  } from 'mobx-react'
import api from '@api'

@inject((stores) => {
  return {
    topicListState: stores.topicListState
  }
})
@observer
class Index extends Component {
  @observable page = 2
  @observable isLoading = false
  @observable isNoMore = false
  @action changeLoadingState (isShow = false) {
    this.isLoading = isShow
  }
  constructor () {
    super()
    this._onMoreBtnClick = this._onMoreBtnClick.bind(this)
  }
  asyncBootstrap () {
    return new Promise((resolve, reject) => {
      let page = 1
      api.article.fetchArticleList(page)
        .then(( { data } ) => {
          this.props.topicListState.update(data)
          this.page++
          resolve(true)
        })
        .catch(reject)
    })
  }
  _onMoreBtnClick () {
    this.changeLoadingState(true)
    api.article.fetchArticleList(this.page)
      .then(({ data }) => {
        this.props.topicListState.batchAdd(data)
        this.page++
        this.changeLoadingState(false)
        if (!data || data.length === 0) {
          this.isNoMore = true
        }
      })
  }
  render () {
    let BottomButton = ({ isNoMore, onClick, isLoading }) => {
      if (isNoMore) {
        return (
          <MoreButton onClick={ onClick }>
           没有更多数据了
          </MoreButton>
        )
      } else {
        return (
          <MoreButton onClick={ onClick }>
            { isLoading ? '正在加载...' : '加载更多' }
          </MoreButton>
        )
      }
    }
    let ArticleList = ( { list } ) => {
      return (
        list.map((item, index) => {
          return <ArticleItem title={ item.title } tags={ [ item.tab ] } desc={ item.title + item.title } key={ index } itemId={ item.id }/>
        })
      )
    }
    return (
      <div>
        <Helmet>
          <title>毛豆的前端博客-首页</title>
          <meta name="description" content="毛豆的前端博客|web前端开发工程师|Node.js|React|Vue|Webpack"/>
        </Helmet>
        <ArticleList list={ this.props.topicListState.data }/>
        <BottomButton isNoMore={ this.isNoMore } onClick={ this._onMoreBtnClick } isLoading={ this.isLoading } />
      </div>
    )
  }
}

export default Index