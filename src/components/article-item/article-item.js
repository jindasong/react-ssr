'use strict'

import React, { Component } from 'react'
import Tag from '@components/tag'

class ArticleItem extends Component {
  render () {
    return (
    <div className="article-item">
      <a href="#" className="article-item__title">折腾一个html5播放器</a>
      <div className="article-item__desc">现在的网页中有很多场景中会涉及到视频播放，个人认为原生的控件已经做得很好了。但是老有人觉得原生的就是丑的，有什么办法呢，('_')。本文利用html5 video的相关api，尝试折腾出一个“美化”过的的视频播放器。</div>
      <div className="article-item__tag">
        <Tag>JavaScript</Tag>
      </div>
    </div>
    )
  }
}

export default ArticleItem