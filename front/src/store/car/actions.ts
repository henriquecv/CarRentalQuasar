import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { CarStateInterface } from './state'

const actions: ActionTree<CarStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
}

export default actions
