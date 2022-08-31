export const state = () => ({
  loginPopup: false
})

export const mutations = {
  setLoginPopup(state, value) {
    state.loginPopup = value
  }
}

export const actions = {
  async changeLoginPopup({commit}, bool) {
     await commit('setLoginPopup', bool)
  }
}
