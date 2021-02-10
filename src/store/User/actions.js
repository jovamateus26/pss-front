import Vue from 'vue'

const cadastrarUsuario = ({ commit }, usuario) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/user', usuario)
      .then(resp => {
        localStorage.setItem('token', resp.data.type + ' ' + resp.data.token)
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

const resetSenha = ({ commit }, usuario) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/reset/password', usuario)
      .then(resp => {
        console.log(resp)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const checarTokenAlterarSenha = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/reset/check', { token: data })
      .then(() => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}
const alterarSenha = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/reset/alterar/senha', data)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  cadastrarUsuario,
  logarUsuario,
  resetSenha,
  checarTokenAlterarSenha,
  alterarSenha
}
