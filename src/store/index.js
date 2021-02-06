import Vue from 'vue'
import Vuex from 'vuex'
import PssModulo from './Pss'
import VagaModulo from './Vaga'
import UserModulo from './User'
import InscricaoModulo from './Inscricao'
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      Pss: PssModulo,
      Vaga: VagaModulo,
      Usuario: UserModulo,
      Inscricao: InscricaoModulo
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
