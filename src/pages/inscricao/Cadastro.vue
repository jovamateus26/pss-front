<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-2 col-xs-0"/>
      <div class="col-md-8 col-xs-12 q-gutter-y-md">
        <q-card class="bg-blue-1 text-center text-bold text-green-10">
          <q-card-section>
            Vaga
          </q-card-section>
        </q-card>
        <q-form class="text-bold">
          <q-card>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Curso de nível médio completo na modalidade normal (MAGISTÉRIO).
                </div>
                <q-radio v-model="shape" val="line" label="Sim"/>
                <q-radio v-model="shape" val="rectangle" label="Não"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Licenciatura plena completa em PEDAGOGIA com habilitação para o magistério ou CURSO NORMAL SUPERIOR
                  reconhecido pelo Mec.
                </div>
                <q-radio v-model="shape" val="line" label="Sim"/>
                <q-radio v-model="shape" val="rectangle" label="Não"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Licenciatura Plena completa numa das áreas do conhecimento da Educação Básica, diferente do curso
                  apresentado para contratação.
                </div>
                <q-radio v-model="shape" val="line" label="Sim"/>
                <q-radio v-model="shape" val="rectangle" label="Não"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Pós-Graduação completa em nível de especialização;
                </div>
                <q-input label="Quantide"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section>
              <div class="q-gutter-sm">
                <div>
                  Experiência na docência de Professor de Educação Infantil de 2011 a 2020.
                </div>
                <q-input label="Quantide em anos"/>
              </div>
            </q-card-section>
            <q-separator/>
            <q-card-section class="row inline-block">
              Experiência profissional na docência
              <q-input label="anos"/>
              anos,
              <q-input label="anos"/>
              meses e
              <q-input label="anos"/>
              dias (anexar comprovantes
              conforme item 7 – 7.1 do edital).
            </q-card-section>
            <q-separator/>
            <q-card-section class="row justify-center text-center">
              <q-btn color="green-10" label="enviar" class="col-md-3 col-xs-12"/>
            </q-card-section>
          </q-card>
        </q-form>
      </div>
      <div class="col-md-2 col-xs-2"/>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
