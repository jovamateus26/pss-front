import Vue from 'vue'
const logado = (to, from, next) => {
  Vue.prototype.$axios.defaults.headers.common.Authorization = localStorage.getItem('token')
  Vue.prototype.$axios({
    url: '/checktoken',
    method: 'POST'
  })
    .then(resp => {
      if (resp.data) {
        next()
      } else {
        if (to.name !== 'Login') next({ path: '/login' })
      }
    })
    .catch(() => {
      if (to.name !== 'Login') next({ path: '/login' })
    })
}

export default logado
