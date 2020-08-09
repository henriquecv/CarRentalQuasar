import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { CarStateInterface } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const carModule: Module<CarStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default carModule
