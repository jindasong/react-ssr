'use strict'
import React, { Component } from 'react'
import './article-details.less'
import {
  observable
} from 'mobx'
import {
  inject,
  observer
} from 'mobx-react'
import api from '@api'
import Helmet from 'react-helmet'
import Layout from '@views/layout'
@inject(stores => {
  return {
    articleState: stores.articleState
  }
})
@observer
class ArticleDetails extends Component {
  @observable articleId
  constructor (props) {
    super()
    let { match: { params }  } = props
    this.articleId = params.articleId
  }
  asyncBootstrap () {
    return new Promise(resolve => {
      api.article.fetchArticleDetails(this.articleId)
        .then(({ data }) => {
          this.props.articleState.updateDetails(data)
          resolve(true)
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
  render () {
    let {
      title,
      content
    } = this.props.articleState.details
    return (
      <div>
        <Helmet>
          <title>{ title }-毛豆的前端博客</title>
          <meta name="description" content="毛豆的前端博客|web前端开发工程师|Node.js|React|Vue|Webpack" />
        </Helmet>
        <div className="article">
          <div className="article__title">
            { title }
          </div>
          <div className="article__content markdown-body" dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    )
  }
}

export default ArticleDetails
