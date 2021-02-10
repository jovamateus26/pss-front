<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <q-input v-model="a"/>
        <q-input v-model="b"/>
      </q-card-section>
      <q-btn @click="teste(a, b)" label="teste" color="green-10"/>
    </q-card>
    {{ total }}
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      a: 0,
      b: 0,
      total: ''
    }
  },
  methods: {
    teste (valor1, valor2) {
      this.total = parseInt(valor1) + parseInt(valor2)
    }
  }
}
</script>
