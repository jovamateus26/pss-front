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

const getInscricaoUsuario = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('/inscricao')
      .then(resp => {
        commit('SET_INSCRICAO_USUARIO', resp.data)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const deletarInscricaoId = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.delete('/inscricao/' + id)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getInscricaoCalculo = ({ commit }, inscricao) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('/calculo/' + inscricao.id)
      .then(resp => {
        commit('SET_INSCRICAO_CALCULO', resp.data)
        console.log(resp)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  cadastrarInscricao,
  getInscricaoUsuario,
  deletarInscricaoId,
  getInscricaoCalculo
}
