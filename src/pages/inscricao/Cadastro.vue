<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12 q-gutter-y-md">
        <q-card class="bg-blue-1 text-center text-bold text-green-10">
          <q-card-section>
            {{vagaDetalheId.nmVaga}} - {{vagaDetalheId.localVaga}}
          </q-card-section>
        </q-card>
        <q-form @submit="cadastrar" class="text-bold">
          <q-card>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Curso de nível médio completo na modalidade normal (MAGISTÉRIO).
                </div>
                <q-radio v-model="titulos.magisterio" val="1" label="Sim"/>
                <q-radio v-model="titulos.magisterio" val="0" label="Não"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Licenciatura plena completa em PEDAGOGIA com habilitação para o magistério ou CURSO NORMAL SUPERIOR
                  reconhecido pelo Mec.
                </div>
                <q-radio v-model="titulos.licenciaturaPlenaPedagogia" val="1" label="Sim"/>
                <q-radio v-model="titulos.licenciaturaPlenaPedagogia" val="0" label="Não"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Licenciatura Plena completa numa das áreas do conhecimento da Educação Básica, diferente do curso
                  apresentado para contratação.
                </div>
                <q-radio v-model="titulos.licenciaturaPlena" val="1" label="Sim"/>
                <q-radio v-model="titulos.licenciaturaPlena" val="0" label="Não"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Pós-Graduação completa em nível de especialização;
                </div>
                <q-input v-model="titulos.posGraduacao" label="Quantide"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Experiência na docência da vaga de inscrição de 2011 a 2020.
                </div>
                <q-input v-model="titulos.experiencia" label="Quantide em anos"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section class="row inline-block">
              Experiência profissional na docência
              <q-input v-model="titulos.experienciaDocencia.anos" label="anos"/>
              anos,
              <q-input v-model="titulos.experienciaDocencia.meses" label="meses"/>
              meses e
              <q-input v-model="titulos.experienciaDocencia.dias" label="dias"/>
              dias (anexar comprovantes
              conforme item 7 – 7.1 do edital).
            </q-card-section>
            <q-separator/>
            <q-card-section class="row justify-center text-center">
              <q-btn type="submit" color="green-10" label="enviar" class="col-md-3 col-xs-12"/>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
      <div class="col-md-2 col-xs-2"/>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  // name: 'PageName',
  data () {
    return {
      vaga_id: this.$route.params.id,
      titulos: {
        magisterio: '',
        licenciaturaPlenaPedagogia: '',
        licenciaturaPlena: '',
        posGraduacao: '',
        experiencia: '',
        experienciaDocencia: {
          anos: '',
          meses: '',
          dias: ''
        }
      }
    }
  },
  computed: {
    ...mapState('Vaga', ['vagaDetalheId'])
  },
  mounted () {
    this.getVagaDetalheId(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      cadastrarInscricao: 'Inscricao/cadastrarInscricao',
      getVagaDetalheId: 'Vaga/getVagaDetalheId'
    }),
    cadastrar () {
      this.cadastrarInscricao({ titulos: this.titulos, vaga_id: this.vaga_id })
        .then(resp => {
          this.$q.notify({
            color: 'positive',
            message: 'Inscricao realizada com sucesso'
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
