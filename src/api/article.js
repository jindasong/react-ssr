'use strict'
import http from '@http'

function fetchArticleDetails (articleId) {
  return http.get(`https://cnodejs.org/api/v1/topic/${articleId}`)
}

function fetchArticleList () {
  return http.get('http://cnodejs.org/api/v1/topics')
}

export default {
  fetchArticleDetails,
  fetchArticleList
}