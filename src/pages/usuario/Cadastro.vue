<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12 q-gutter-y-md">
        <div class="row">
          <div class="col-all">
            <q-card class="bg-blue-1 text-green-10">
              <q-card-section class="text-center text-bold">
                Cadastro de usuário
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row">
          <div class="col-all">
            <q-form>
              <q-card class="text-green-10">
                <q-card-section>
                  <q-input label="Nome" v-model="usuario.nmPessoa"/>
                </q-card-section>
                <q-card-section>
                  <q-input label="E-mail" v-model="usuario.email"/>
                </q-card-section>
                <q-card-section>
                  <q-input label="Senha" type="password" v-model="usuario.password"/>
                </q-card-section>
                <q-card-section>
                  <q-input label="Confirmação de senha" type="password" v-model="usuario.password_confirmation"/>
                </q-card-section>
                <q-card-section>
                  <q-input label="CPF" v-model="usuario.nrDocumento"/>
                </q-card-section>
                <q-card-section>
                  <q-input label="Endereço" v-model="usuario.endereco"/>
                </q-card-section>
                <q-card-section>
                  <q-input label="Número" v-model="usuario.nrEndereco"/>
                </q-card-section>
                <q-card-section>
                  Data de nascimento
                </q-card-section>
                <q-card-section>
                  <q-date name="wedding" v-model="usuario.dataNascimento" />
                </q-card-section>
                <q-card-section>
                  Portador de deficiência
                  <q-radio label="Sim" val="S" v-model="usuario.flPNE"/>
                  <q-radio label="Não" val="N" v-model="usuario.flPNE"/>
                </q-card-section>
                <q-card-section>
                 Afrodecendente
                  <q-radio label="Sim" val="S" v-model="usuario.flAfrodescendente"/>
                  <q-radio label="Não" val="N" v-model="usuario.flAfrodescendente"/>
                </q-card-section>
                <q-card-section>
                  Indigena
                  <q-radio label="Sim" val="S" v-model="usuario.flIndio"/>
                  <q-radio label="Não" val="N" v-model="usuario.flIndio"/>
                </q-card-section>
                <q-card-section class="justify-center text-center">
                  <q-btn color="green-10" label="Cadastrar" @click="cadastrar"/>
                </q-card-section>
              </q-card>
            </q-form>
          </div>
        </div>

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
        nmPessoa: '',
        email: '',
        password: '',
        password_confirmation: '',
        nrDocumento: '',
        dataNascimento: '',
        flPNE: '',
        flAfrodescendente: '',
        flIndio: '',
        endereco: '',
        nrEndereco: ''
      }
    }
  },
  methods: {
    ...mapActions({
      cadastrarUsuario: 'Usuario/cadastrarUsuario'
    }),
    cadastrar () {
      this.cadastrarUsuario(this.usuario)
        .then(resp => {
          this.$router.push('/inscricao/usuario/')
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
