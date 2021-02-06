import Vue from 'vue'

const getPssLista = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios({
      method: 'GET',
      url: '/pss'
    })
      .then(resp => {
        commit('SET_PSS_LISTA', resp.data)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}
const getPssDetalhe = ({ commit }, pss) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios({
      method: 'GET',
      url: '/pss/' + pss
    })
      .then(resp => {
        commit('SET_PSS_DETALHE', resp.data)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  getPssLista,
  getPssDetalhe
}
