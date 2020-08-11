import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { CarStateInterface } from './state'

const actions: ActionTree<CarStateInterface, StateInterface> = {
  async getCars ({ commit }) {
    try {
      const response = await fetch("/api/cars");
      const carsJson = await response.json();
      commit('setCars', carsJson)
    }
    catch {
      commit('setCars')
    }
  },
  soma ({ commit }) {
    commit('changeCount')
  },
  zeraCount ({ commit }) {
    commit('setCars')
  }
}

export default actions
