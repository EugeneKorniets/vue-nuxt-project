import axios from 'axios'

export const state = () => ({
  cityList: []
})

export const getters = {
  getCityList: state => state.cityList
}

export const mutations = {
  setCityList: (state, payload) => {
    state.cityList = payload
  }
}

export const actions = {
  loadCityList: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios({
        url: 'http://localhost:3030/api/city',
        method: 'GET'
      })
        .then((resp) => {
          commit('setCityList', resp.data)
          resolve(resp)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
