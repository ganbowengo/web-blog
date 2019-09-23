import Vue from 'vue'
import Vuex from 'vuex'

const state = {
    theme: sessionStorage.getItem('theme') === 'true'
}
const mutations = {
    theme (state, theme) {
        sessionStorage.setItem('theme', theme)
        sessionStorage.getItem('theme')
        state.theme = theme
    }
}

const actions = {
    theme: ({
        commit
    }, theme) => commit('theme', theme)
}

const getters = {
    theme: state => state.theme
}

Vue.use(Vuex)
export default new Vuex.Store({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
})