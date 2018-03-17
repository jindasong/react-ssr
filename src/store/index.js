'use strict'
import TopicListState from './topic_list_state'
import ArticleState from './article_state'

export const createStoreMap = () => {
  return {
    topicListState: new TopicListState(),
    articleState: new ArticleState()
  }
}

export default {
  TopicListState,
  ArticleState
}