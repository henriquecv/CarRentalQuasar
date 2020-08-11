import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { CarStateInterface } from './state'

const getters: GetterTree<CarStateInterface, StateInterface> = {
  categoriesGetter (state: CarStateInterface) {
    return new Set(state.cars.map(car => car.category).sort())
  },
  brandsGetter (state: CarStateInterface) {
    return new Set(state.cars.map(car => car.brand).sort())
  },
  filteredCars (state: CarStateInterface) {
    return state.cars.filter(car => (((state.brands_filter.includes(car.brand)) || (state.brands_filter.length == 0)) && ((state.categories_filter.includes(car.category)) || (state.categories_filter.length == 0))))
    //return state.brands_filter.length == 0
  }
}

export default getters
