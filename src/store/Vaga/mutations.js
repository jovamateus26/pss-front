/*
export function someMutation (state) {
}
*/

const SET_VAGA_PSS_LISTA = (state, data) => {
  state.vagaPssLista = data
}

const SET_VAGA_DETALHE_ID = (state, data) => {
  state.vagaDetalheId = data
}

export {
  SET_VAGA_PSS_LISTA,
  SET_VAGA_DETALHE_ID
}
