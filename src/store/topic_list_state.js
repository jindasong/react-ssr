'use strict'

import {
  observable,
  action
} from 'mobx'

class TopicListState {
  constructor (data) {
    this.data = data || []
  }

  @observable data

  @action update (data) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data
    }
  }
}

export default TopicListState