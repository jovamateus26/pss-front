<template>
  <q-page>
    <div class="row q-pa-lg">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12">
        <q-form class="q-gutter-y-md">
          <q-card class="bg-green-10 text-center text-white text-bold">
            <q-card-section>
              <div>Recuperar senha</div>
            </q-card-section>
          </q-card>
          <q-card>
            <q-card-section>
              <q-input v-model="usuario.email" label="E-mail"/>
            </q-card-section>
            <q-card-section class="text-center">
              <q-btn label="Resetar senha" @click="resetar" color="green-10"/>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
      <div class="col-md-2 col-xs-0"/>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // name: 'PageName',
  data () {
    return {
      usuario: {
        email: ''
      }
    }
  },
  methods: {
    ...mapActions({
      resetSenha: 'Usuario/resetSenha'
    }),
    resetar () {
      this.resetSenha(this.usuario)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Você receberá um email com as instruções'
          })
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    }
  }
}
</script>
