'use strict'
import {
  observable,
  action,
  computed
} from 'mobx'

class ListState {
  constructor (data) {
    this.data = data || []
  }

  @observable data

  @computed get a () {
    return this.data
  }

  @action update (data) {
    this.data = data
  }

  toJSON () {
    return {
      data: this.data
    }
  }
}

export default ListState