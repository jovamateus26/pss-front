<template>
  <q-page padding>
    <div class="row q-pa-lg text-green-10">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12">
        <q-card v-if="isValid">
          <q-card-section class="text-green-10 text-center text-bold text-h5">
            Alterar senha
          </q-card-section>
          <q-card-section>
            <q-form @submit="alterar" autofocus class="text-center q-gutter-y-md">
              <q-input type="password" v-model="formSenha.password" color="green-10" label="Senha"/>
              <q-input type="password" v-model="formSenha.password_confirmation" color="green-10" label="Repita a senha"/>
              <q-btn type="submit" color="green-10" label="Alterar senha"/>
            </q-form>
          </q-card-section>
        </q-card>
        <q-card v-else>
          <q-card-section>
            O token é inválido
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="col-md-2 col-xs-0"/>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // name: 'PageName',
  data () {
    return {
      isValid: false,
      formSenha: {
        token: this.$route.params.token,
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    ...mapActions({
      checarTokenAlterarSenha: 'Usuario/checarTokenAlterarSenha',
      alterarSenha: 'Usuario/alterarSenha'
    }),
    alterar () {
      this.alterarSenha(this.formSenha)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Senha alterada com sucesso'
          })
          this.$router.push('/login')
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    }
  },
  mounted () {
    this.checarTokenAlterarSenha(this.$route.params.token)
      .then(() => {
        this.isValid = true
        console.log('ok')
      })
      .catch(() => {
        this.isValid = false
        console.log('fail')
      })
  }
}
</script>
