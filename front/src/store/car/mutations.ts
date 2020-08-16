import { MutationTree } from 'vuex'
import { CarStateInterface } from './state'

const mutation: MutationTree<CarStateInterface> = {
  changeCategoriesFilter (state: CarStateInterface, dict: unknown) {
    if (dict.name == 'category') {
      if (dict.checked) {
        state.categories_filter = [...state.categories_filter, dict.category]
      }
      else {
        state.categories_filter = state.categories_filter.filter(el => el != dict.category)
      }
    }
    else {
      if (dict.checked) {
        state.brands_filter = [...state.brands_filter, dict.category]
      }
      else {
        state.brands_filter = state.brands_filter.filter(el => el != dict.category)
      }
    }
  },
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
