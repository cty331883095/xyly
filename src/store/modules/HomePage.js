import { getScenicTotal } from './../api'

export const HomePage = {
  namespaced: true,
  state: () => {
    return {
      crossingRankData: []
    }
  },
  getters: {},
  mutations: {
    setTotalData (state, data) {
      state.crossingRankData = data
    }
  },
  actions: {
    getScenicTotal ({ commit }) {
      return new Promise((resolve, reject) => {
        getScenicTotal().then((res) => {
          if (res.code !== 0) {
            reject(new Error(res.message))
          } else {
            commit('setTotalData', res.extend)
            resolve(res.extend)
          }
        })
      })
    }
  }
}
