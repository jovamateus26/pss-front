<template>
  <q-page class="">
    <div class="row q-pa-lg">
      <div class="col-md-2 col-xs-0"></div>
      <div class="col-md-8 col-xs-12">
        <q-card v-for="item in pssLista" v-bind:key="item.id" class="col-all">
          <q-card-section class="bg-blue-1 text-green-10 text-bold justify-center text-center">
            {{ item.nrEditalConcurso }}/{{ item.anoEditalConcurso }} {{ item.tituloPss }}
          </q-card-section>
          <q-card-section>
            Inscrições de <b>{{ formatarData(item.dataInicio) }}</b> até <b>{{ formatarData(item.dataFinal) }}</b>
          </q-card-section>
          <q-card-section>
            {{ item.descricaoPss }}
          </q-card-section>
          <q-card-actions align="center" class="bg-blue-1">
            <q-btn :to="{ name: 'pss', params: {id: item.id}}" icon-right="send" color="green-10" flat label="Mais informações"/>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-md-2 col-xs-0"></div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageIndex',
  methods: {
    ...mapActions({
      getPssLista: 'Pss/getPssLista'
    }),
    adicionaZero (numero) {
      if (numero <= 9) {
        return '0' + numero
      } else {
        return numero
      }
    },
    formatarData (valor) {
      const data = new Date(valor)
      const dataFormatada = (this.adicionaZero((data.getDate())) +
        '/' + this.adicionaZero((data.getMonth() + 1)) +
        '/' + (data.getFullYear()))
      return dataFormatada
    }
  },
  computed: {
    ...mapState('Pss', ['pssLista'])
  },
  mounted () {
    this.getPssLista()
  }
}
</script>
