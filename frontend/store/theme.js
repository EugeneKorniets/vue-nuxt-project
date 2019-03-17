export const state = () => ({
  theme: 'light'
})

export const getters = {}

export const mutations = {
  setDarkTheme: (state) => {
    state.theme = 'dark'
  },

  setLightTheme: (state) => {
    state.theme = 'light'
  }
}

export const actions = {
  setDarkTheme: ({ commit }) => {
    commit('setDarkTheme')
  },

  setLightTheme: ({ commit }) => {
    commit('setLightTheme')
  }
}
