<template>
  <q-page>
    <!-- content -->
    <div class="row q-pa-lg text-green-10">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12 q-gutter-y-md">
        <q-card class="bg-blue-1">
          <q-card-section>
            <div class="text-green-10 text-bold text-center">
              {{ pssDetalhe.tituloPss }} {{ pssDetalhe.nrEditalConcurso }}/{{ pssDetalhe.anoEditalConcurso }}
            </div>
          </q-card-section>
        </q-card>
        <q-card>
          <q-card-section class="text-justify">
            {{ pssDetalhe.descricaoPss }}
          </q-card-section>
        </q-card>
        <q-card class="bg-blue-1">
          <q-card-section class="text-center text-bold">Edital</q-card-section>
        </q-card>
        <q-card>
          <q-card-section>
            <div class="row q-gutter-y-md">
              <div class="col-md-6 col-xs-6 text-center">
                Edital 1/2021
              </div>
              <div class="col-md-6 col-xs-6 text-center">
                <q-btn color="green-10" icon="folder" label="Abrir" @click="downloadEdital()"/>
              </div>
            </div>
          </q-card-section>
          <q-separator />
        </q-card>
        <q-card class="bg-blue-1">
          <q-card-section>
            <div class="text-center text-bold text-green-10">Vagas</div>
          </q-card-section>
        </q-card>
        <q-card>
          <q-card-section v-for="vaga in vagaPssLista" :key="vaga.id">
            <div class="row  q-gutter-y-md">
              <div class="col-md-4 col-xs-12 text-center">
                {{ vaga.nmVaga }}
              </div>
              <div class="col-md-3 col-xs-6 text-center">
                {{ vaga.localVaga }}
              </div>
              <div class="col-md-2 col-xs-6 text-center">
                {{ vaga.qtdVaga === 0 ? 'Cadastro reserva' : vaga.qtdVaga }}
              </div>
              <div class="col-md-3 col-xs-12 text-center justify-center">
                <q-btn :to="{ name: 'inscricao', params: { id: vaga.id } }" icon-right="send" color="green-10" label="Escolher"/>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-2 col-xs-0"/>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PssDetalhe',
  methods: {
    ...mapActions({
      getPssDetalhe: 'Pss/getPssDetalhe',
      getVagaPssLista: 'Vaga/getVagaPssLista',
      downloadEdital: 'Vaga/downloadEdital'
    }),
    async detalhar () {
      await this.getPssDetalhe(this.$route.params.id)
      await this.getVagaPssLista(this.$route.params.id)
    }
  },
  computed: {
    ...mapState('Pss', ['pssDetalhe']),
    ...mapState('Vaga', ['vagaPssLista'])
  },
  mounted () {
    this.detalhar()
  }
}
</script>
