'use strict'
import {
  observable
} from 'mobx'

class ListState {
  constructor (data) {
    this.data = data || []
  }
  @observable data
  toJSON () {
    return {
      data: this.data
    }
  }
}

export default ListState