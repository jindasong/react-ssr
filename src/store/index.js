'use strict'
import TopicListState from './topic_list_state'

export const createStoreMap = () => {
  return {
    topicListState: new TopicListState()
  }
}

export default {
  TopicListState
}