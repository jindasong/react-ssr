'use strict'
import ListState from './list'

export const createStoreMap = () => {
  return {
    listState: new ListState()
  }
}

export default {
  ListState
}