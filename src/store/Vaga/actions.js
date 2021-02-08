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

const getVagaDetalheId = ({ commit }, vaga) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('/vaga/' + vaga)
      .then(resp => {
        commit('SET_VAGA_DETALHE_ID', resp.data)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const downloadEdital = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios({ url: 'edital', method: 'GET', responseType: 'blob' })
      .then(resp => {
        var blob = new Blob([resp.data], {
          type: 'application/pdf'
        })
        var url = window.URL.createObjectURL(blob)
        window.open(url)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  getVagaPssLista,
  getVagaDetalheId,
  downloadEdital
}
