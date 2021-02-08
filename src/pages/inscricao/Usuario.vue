<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12 q-gutter-y-md">
        <q-card class="text-center text-bold text-green-10 bg-blue-1">
          <q-card-section>
            Minhas Inscrições
          </q-card-section>
        </q-card>
        <q-card>
          <q-card-section>
            <div class="row">
              <div class="text-bold col-md-8">Vaga</div>
              <div class="text-bold col-md-2">Situação</div>
              <div class="text-bold col-md-2">Opções</div>
            </div>
          </q-card-section>
        </q-card>
        <q-card v-for="item in listaInscricaoUsuario" v-bind:key="item.id">
          <q-card-section>
            <div class="row">
              <div class="text-bold col-md-8">{{ item.vaga.nmVaga }}</div>
              <div class="text-bold col-md-2">em andamento</div>
              <div class="text-bold col-md-2">
              </div>
            </div>
          </q-card-section>
        </q-card>
        {{ listaInscricaoUsuario }}
      </div>
      <div class="col-md-2 col-xs-0"/>
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  // name: 'PageName',
  methods: {
    ...mapActions({
      getInscricaoUsuario: 'Inscricao/getInscricaoUsuario'
    })
  },
  computed: {
    ...mapState('Inscricao', ['listaInscricaoUsuario'])
  },
  mounted () {
    this.getInscricaoUsuario()
  }
}
</script>
