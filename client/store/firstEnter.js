export const state = () => ({
  firstEnter: true
})

export const mutations = {
  SET_FIRST_TIME_ENTER(state, boolean) {
    state.firstEnter = boolean;
  }
}

export const actions = {
  async getFirstVisit({commit}, boolean) {
    await commit('SET_FIRST_TIME_ENTER', boolean)
  }
}
