'use strict'
import http from '@http'

function fetchArticleDetails (articleId) {
  return http.get(`https://cnodejs.org/api/v1/topic/${articleId}`)
}

function fetchArticleList (page) {
  return http.get('http://cnodejs.org/api/v1/topics', {
    params: {
      page: page || 1
    }
  })
}

export default {
  fetchArticleDetails,
  fetchArticleList
}