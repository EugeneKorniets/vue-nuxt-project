import axios from 'axios'

export const state = () => ({
  menu: []
})

export const getters = {
  getMenu: state => state.menu
}

export const mutations = {
  setMenu: (state, payload) => {
    state.menu = payload
  }
}

export const actions = {
  loadMenu: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios({
        url: 'http://localhost:3030/api/menu',
        method: 'GET'
      })
        .then((resp) => {
          commit('setMenu', resp.data)
          resolve(resp)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
