import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CarStateInterface } from './state'

const getters: GetterTree<CarStateInterface, StateInterface> = {
  categoriesGetter (state: CarStateInterface) {
    return new Set(state.cars.map(car => car.category).sort())
  },
  brandsGetter (state: CarStateInterface) {
    return new Set(state.cars.map(car => car.brand).sort())
  }
}

export default getters
