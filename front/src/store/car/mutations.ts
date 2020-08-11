import { MutationTree } from 'vuex'
import { CarStateInterface } from './state'

const mutation: MutationTree<CarStateInterface> = {
  changeCount (state: CarStateInterface) {
    state.count ++
  },
  changeProp (state: CarStateInterface) {
    state.prop = !state.prop
  },
  setCars (state: CarStateInterface, cars: unknown) {
    state.cars = [...cars]
  },
}

export default mutation
