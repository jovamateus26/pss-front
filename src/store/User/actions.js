import Vue from 'vue'

const cadastrarUsuario = ({ commit }, usuario) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/user', usuario)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const logarUsuario = ({ commit }, usuario) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/login', usuario)
      .then(resp => {
        localStorage.setItem('token', resp.data.type + ' ' + resp.data.token)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  cadastrarUsuario,
  logarUsuario
}
