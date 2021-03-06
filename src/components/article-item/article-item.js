'use strict'

import React, { Component } from 'react'
import Tag from '@components/tag'
import PropTypes from 'prop-types'

class ArticleItem extends Component {

  static defaultProps = {
    tags: []
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    tags: PropTypes.array
  }

  render () {
    let { title, desc, tags } = this.props
    return (
    <div className="article-item">
      <a href="#" className="article-item__title">{ title }</a>
      <div className="article-item__desc">{ desc }</div>
      <div className="article-item__tag">
        {
          tags.map((item, index) => {
            if (item) {
              return <Tag key={ index }>{ item }</Tag>
            }
          })
        }
      </div>
    </div>
    )
  }
}

export default ArticleItem