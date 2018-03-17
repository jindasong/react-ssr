'use strict'
import {
  observable,
  action
} from 'mobx'

class ArticleState {
  constructor (initState = {}) {
    this.details = initState.details || {}
  }

  @observable details

  @action updateDetails (data) {
    this.details = data
  }

  toJSON () {
    return {
      details: this.details
    }
  }

}

export default ArticleState