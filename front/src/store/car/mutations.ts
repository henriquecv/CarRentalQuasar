import { MutationTree } from 'vuex'
import { CarStateInterface } from './state'

const mutation: MutationTree<CarStateInterface> = {
  changeCount (state: CarStateInterface, num: number) {
    state.count += num
  },
  changeProp (state: CarStateInterface) {
    state.prop = !state.prop
  }
}

export default mutation
