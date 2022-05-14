export const state = () => ({
  imgIndex: null,
})

export const mutations = {
  setImgIndex(state, value) {
      state.modal = value
  }
}

export const actions = {
  async changeImgIndex({commit}, boolean) {
     await commit('setImgIndex', boolean)
  }
}
