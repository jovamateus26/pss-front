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
          <q-card-section class="mobile-hide">
            <div class="row">
              <div class="text-bold col-md-5">Vaga</div>
              <div class="text-bold col-md-2">PSS</div>
              <div class="text-bold col-md-2">Situação</div>
              <div class="text-bold col-md-3">Opções</div>
            </div>
          </q-card-section>
        </q-card>
        <q-card v-for="item in listaInscricaoUsuario" v-bind:key="item.id">
          <q-card-section>
            <q-list class="">
              <q-expansion-item @show="detalhar(item)">
                <template v-slot:header>
                  <div class="row col-all">
                    <div class="text-bold col-md-5 col-xs-12">{{ item.vaga.nmVaga }}</div>
                    <div class="text-bold col-md-2 col-xs-12">{{
                        item.vaga.pss.nrEditalConcurso
                      }}/{{ item.vaga.pss.anoEditalConcurso }}
                    </div>
                    <div class="text-bold col-md-2 col-xs-12">em andamento</div>
                    <div class="text-bold col-md-3 col-xs-12">
                      <div class="row justify-between">
                        <div class="text-negative" @click="confirmDelete(item)">
                          <q-icon size="xs" name="delete"/>
                          Deletar
                        </div>
                        <div class="text-green-10">
                          <q-icon size="xs" name="print"/>
                          Imprimir
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
                <q-card>
                  <q-card-section>
                    <div class="row mobile-hide">
                      <div class="col-md-6">Titulos</div>
                      <div class="col-md-6">Pontuação</div>
                    </div>
                  </q-card-section>
                  <q-card-section v-for="parcial in inscricaoCalculo.parcial" v-bind:key="parcial.id">
                    <div class="row">
                      <div class="col-md-6 col-xs-12">
                        <div class="mobile-only">Titúlo:</div>
                        <div>{{ parcial.titulo }}</div>
                      </div>
                      <div class="col-md-6 col-xs-12">
                        <div class="mobile-only">Pontuação:</div>
                        <div>{{ parcial.total }}</div>
                      </div>
                    </div>
                    <q-separator/>
                  </q-card-section>
                  <q-separator/>
                  <q-card-section class="text-green-10 text-bold">
                    <div class="row">
                      <div class="col-md-6 col-xs-6">
                        Total:
                      </div>
                      <div class="col-md-6">
                        {{ inscricaoCalculo.total }}
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-2 col-xs-0"/>
      <q-dialog persistent v-model="confirmDeletar">
        <q-card style="width: 300px">
          <q-card-section class="text-center text-bold text-green-10">
            <div>Deletar</div>
          </q-card-section>
          <q-card-section>
            Deseja deletar a inscrição?
          </q-card-section>
          <q-card-actions align="right">
            <q-btn flat label="Sim" color="green-10" @click="deletar"/>
            <q-btn flat label="Não" color="negative" v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  // name: 'PageName',
  data () {
    return {
      confirmDeletar: false,
      inscricao: {
        id: ''
      }
    }
  },
  methods: {
    ...mapActions({
      getInscricaoUsuario: 'Inscricao/getInscricaoUsuario',
      deletarInscricaoId: 'Inscricao/deletarInscricaoId',
      getInscricaoCalculo: 'Inscricao/getInscricaoCalculo'
    }),
    confirmDelete (item) {
      this.confirmDeletar = !this.confirmDeletar
      this.inscricao = item
      console.log(item.id)
    },
    deletar () {
      this.deletarInscricaoId(this.inscricao.id)
        .then(() => {
          this.getInscricaoUsuario()
          this.confirmDeletar = false
        })
    },
    detalhar (item) {
      console.log(item)
      this.getInscricaoCalculo(item)
    }
  },
  computed: {
    ...mapState('Inscricao', ['listaInscricaoUsuario', 'inscricaoCalculo'])

  },
  mounted () {
    this.getInscricaoUsuario()
  }
}
</script>
