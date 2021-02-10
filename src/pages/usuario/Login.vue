<template>
  <q-page>
    <div class="row q-pa-lg text-green-10">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12">
        <q-form @submit="login" class="q-gutter-y-md text-center text-green-10">
          <q-card class="bg-blue-1">
            <q-card-section class="text-center text-bold text-green-10">
              Login
            </q-card-section>
          </q-card>
          <q-card>
            <q-card-section>
              <q-input label="E-mail" v-model="usuario.email"/>
            </q-card-section>
            <q-card-section>
              <q-input label="Senha" type="password" v-model="usuario.password"/>
            </q-card-section>
            <q-card-section class="row justify-center">
              <q-btn type="submit" class="col-md-3 col-xs-12" color="green-10" label="Entrar"/>
            </q-card-section>
          </q-card>
          <q-card>
            <q-card-section class="row justify-center q-gutter-x-md q-pt-xl">
              <q-btn to="/usuario/cadastro" color="green-7" label="Cadastrar-me"/>
              <q-btn color="primary" label="Recuperar senha" :to="{name: 'resetsenha'}"/>
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
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      logarUsuario: 'Usuario/logarUsuario'
    }),
    login () {
      this.logarUsuario(this.usuario)
        .then(() => {
          this.$router.push('/')
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
