<template>
  <q-page class="">
    <div class="row q-pa-lg text-green-10">
      <div class="col-md-2 col-xs-0"></div>
      <div class="col-md-8 col-xs-12 q-gutter-y-md">
        <q-card v-for="item in pssLista" v-bind:key="item.id" class="col-all">
          <q-card-section class="bg-blue-1 text-green-10 text-bold justify-center text-center">
            {{ item.tituloPss }} {{ item.nrEditalConcurso }}/{{ item.anoEditalConcurso }}
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
    <q-dialog v-model="dialog">
      <q-card class="bg-red-8">
        <q-card-section class="row items-center text-center justify-center q-pb-none">
          <div class="text-h1 text-bold text-center justify-center">Aviso</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="text-h3 justify-center text-center">
          O sistema está apenas em modo consulta, todos os formularios são exibido, mas não valida nenhuma inscrição pois já estão encerradas!
        </q-card-section>
        <q-card-section class="justify-center text-center">
          <q-btn v-close-popup  label="Seguir para o sistema" color="white" text-color="red"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
      dialog: true
    }
  },
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
