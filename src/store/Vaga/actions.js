import Vue from 'vue'

const getVagaPssLista = ({ commit }, pss) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios({
      method: 'GET',
      url: '/vaga/pss/' + pss
    })
      .then(resp => {
        commit('SET_VAGA_PSS_LISTA', resp.data)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  getVagaPssLista
}
