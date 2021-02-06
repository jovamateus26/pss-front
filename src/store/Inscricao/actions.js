import Vue from 'vue'

const cadastrarInscricao = ({ commit }, inscricao) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/inscricao', inscricao)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  cadastrarInscricao
}
